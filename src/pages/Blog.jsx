import { useEffect, useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaArrowRight, FaCalendarAlt, FaClock, FaImage, FaPlus, FaTimes } from 'react-icons/fa';
import { useAdmin } from '../context/AdminContext';

const storageKey = 'melah-blog-posts';

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [isComposerOpen, setIsComposerOpen] = useState(false);
  const [selectedPost, setSelectedPost] = useState(null);
  const [form, setForm] = useState({ title: '', category: 'Technology', excerpt: '', content: '', author: '', image: '' });
  const { isAdmin } = useAdmin();

  useEffect(() => {
    try {
      const savedPosts = JSON.parse(localStorage.getItem(storageKey));
      if (Array.isArray(savedPosts)) setPosts(savedPosts);
    } catch {
      // The page remains empty until a post is published.
    }
  }, []);

  const featuredPost = posts[0];
  const latestPosts = useMemo(() => posts.slice(1), [posts]);

  const updateField = (event) => setForm((current) => ({ ...current, [event.target.name]: event.target.value }));

  const handleImage = (event) => {
    const [file] = event.target.files;
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => setForm((current) => ({ ...current, image: reader.result }));
    reader.readAsDataURL(file);
  };

  const publishPost = (event) => {
    event.preventDefault();
    const date = new Date();
    const newPost = {
      id: `post-${date.getTime()}`,
      category: form.category,
      title: form.title.trim(),
      excerpt: form.excerpt.trim(),
      content: form.content.trim(),
      author: form.author.trim() || 'Melah Technologies',
      date: date.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }),
      readTime: `${Math.max(1, Math.ceil(form.content.trim().split(/\s+/).length / 200))} min read`,
      image: form.image,
      accent: 'custom',
    };
    const savedPosts = [newPost, ...posts];
    localStorage.setItem(storageKey, JSON.stringify(savedPosts));
    setPosts([newPost, ...posts]);
    setForm({ title: '', category: 'Technology', excerpt: '', content: '', author: '', image: '' });
    setIsComposerOpen(false);
    setSelectedPost(newPost);
  };

  return (
    <main className="blog-page">
      <section className="blog-hero">
        <div className="container blog-hero-content">
          <div>
            <span className="eyebrow">Melah insights</span>
            <h1>Ideas for the connected<br />future.</h1>
            <p>Perspectives on technology, transformation and the work that moves organisations forward.</p>
          </div>
          {isAdmin && <button className="publish-button" onClick={() => setIsComposerOpen(true)}><FaPlus /> Publish a post</button>}
        </div>
      </section>

      <section className="blog-content container">
        {featuredPost ? <>
          <div className="blog-section-heading"><span>Featured story</span><div /></div>
          <motion.article className={`featured-post post-tone-${featuredPost.accent}`} initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}>
            <div className="featured-art">{featuredPost.image ? <img src={featuredPost.image} alt="" /> : <span>01</span>}</div>
            <div className="featured-copy">
              <span className="post-category">{featuredPost.category}</span>
              <h2>{featuredPost.title}</h2><p>{featuredPost.excerpt}</p><PostMeta post={featuredPost} />
              <button className="read-link" onClick={() => setSelectedPost(featuredPost)}>Read article <FaArrowRight /></button>
            </div>
          </motion.article>
          {latestPosts.length > 0 && <><div className="blog-section-heading latest-heading"><span>Latest thinking</span><div /></div>
            <div className="posts-grid">{latestPosts.map((post, index) => (
              <motion.article className="post-card" key={post.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.08 }} viewport={{ once: true }}>
                <div className={`post-art post-tone-${post.accent}`}>{post.image ? <img src={post.image} alt="" /> : <span>{String(index + 2).padStart(2, '0')}</span>}</div>
                <div className="post-card-copy"><span className="post-category">{post.category}</span><h3>{post.title}</h3><p>{post.excerpt}</p><PostMeta post={post} /><button className="read-link" onClick={() => setSelectedPost(post)}>Read article <FaArrowRight /></button></div>
              </motion.article>
            ))}</div></>}
        </> : <section className="empty-blog"><span className="eyebrow">Your publication</span><h2>Your first insight starts here.</h2><p>Share company news, expert perspectives and technology updates with your audience.</p>{isAdmin && <button className="publish-button" onClick={() => setIsComposerOpen(true)}><FaPlus /> Publish your first post</button>}</section>}
      </section>

      <section className="newsletter-band"><div className="container"><span className="eyebrow">Stay informed</span><h2>Technology changes quickly.<br />Keep the useful ideas close.</h2><a href="mailto:info@melah.cm?subject=Subscribe%20to%20Melah%20Insights" className="newsletter-link">Subscribe to insights <FaArrowRight /></a></div></section>

      <AnimatePresence>
        {isAdmin && isComposerOpen && <Composer form={form} updateField={updateField} handleImage={handleImage} publishPost={publishPost} close={() => setIsComposerOpen(false)} />}
        {selectedPost && <ArticleModal post={selectedPost} close={() => setSelectedPost(null)} />}
      </AnimatePresence>
    </main>
  );
};

const PostMeta = ({ post }) => <div className="post-meta"><span><FaCalendarAlt /> {post.date}</span><span><FaClock /> {post.readTime}</span></div>;

const Composer = ({ form, updateField, handleImage, publishPost, close }) => (
  <motion.div className="blog-modal-backdrop" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onMouseDown={close}>
    <motion.form className="post-composer" initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 24 }} onMouseDown={(event) => event.stopPropagation()} onSubmit={publishPost}>
      <button className="modal-close" type="button" onClick={close} aria-label="Close"><FaTimes /></button>
      <span className="eyebrow">New insight</span><h2>Publish a post</h2><p className="composer-note">Posts are saved on this browser. Connect this form to your CMS or API when you are ready to publish centrally.</p>
      <div className="composer-fields"><label>Article title<input required name="title" value={form.title} onChange={updateField} placeholder="Give your article a clear title" /></label><label>Category<select name="category" value={form.category} onChange={updateField}><option>Technology</option><option>Digital Strategy</option><option>Cybersecurity</option><option>Cloud & Infrastructure</option><option>Company News</option></select></label><label>Author<input name="author" value={form.author} onChange={updateField} placeholder="Melah Technologies" /></label><label className="wide-field">Short introduction<textarea required name="excerpt" value={form.excerpt} onChange={updateField} placeholder="A short summary displayed on the blog page." rows="3" /></label><label className="wide-field">Article content<textarea required name="content" value={form.content} onChange={updateField} placeholder="Write the article here..." rows="7" /></label><label className="image-upload"><FaImage /> {form.image ? 'Cover image selected' : 'Add cover image'}<input type="file" accept="image/*" onChange={handleImage} /></label></div>
      <button className="publish-button" type="submit"><FaPlus /> Publish post</button>
    </motion.form>
  </motion.div>
);

const ArticleModal = ({ post, close }) => (
  <motion.div className="blog-modal-backdrop" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onMouseDown={close}>
    <motion.article className="article-view" initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 24 }} onMouseDown={(event) => event.stopPropagation()}><button className="modal-close" onClick={close} aria-label="Close"><FaTimes /></button><span className="post-category">{post.category}</span><h1>{post.title}</h1><PostMeta post={post} /><p className="article-intro">{post.excerpt}</p>{post.image && <img className="article-image" src={post.image} alt="" />}{post.content ? <p className="article-body">{post.content}</p> : <p className="article-body">Our team is preparing this article. Please check back soon for the complete perspective.</p>}<p className="article-author">By {post.author}</p></motion.article>
  </motion.div>
);

export default Blog;

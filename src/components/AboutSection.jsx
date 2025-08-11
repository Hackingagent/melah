import { motion } from 'framer-motion';
import image from '../assets/images/logo.jpeg'
import togo from '../assets/images/togo.jpg'

const AboutSection = () => {
  return (
    <>
      <div className='togo'>
        <img src={togo} />
      </div>
      <motion.section 
        className="section about-section"
        id="about"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, margin: "-100px" }}
      >

        <div className="container">
          <div className="section-header">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              About Melah Technologies
            </motion.h2>
            {/* <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Leading the way in innovative technology solutions since 2015
            </motion.p> */}
          </div>
          
          <div className="about-content">
            <motion.div 
              className="about-text fade-in-left"
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3>Our Story</h3>
              <p>
                Melah Information Technologies Co.  Ltd in Bamenda, 
                Cameroon, is a base IT marketing company also function as a 
                marketing agency, we offer services such as:
              </p>

              <p>
                Digital marketing is the management of an online presence through 
                email campaigns, social media, SEO, and content marketing. <br />
                Supporting businesses in developing solid brand identities and 
                market positioning is known as brand development. <br />
                Advertising Campaigns: Creating and executing targeted advertising 
                strategies across digital platforms. <br />
                Software Development: Developing software tailored to clients needs
                and specifications <br />
                Analytics and Reporting: Using tools like Google Analytics,
                 providing insights into the performance of marketing campaigns 
                 and customer behavior. If you're looking for specific marketing 
                 services or want to connect with them directly.
              </p>
              <p>
                Our team of experts combines technical expertise with business acumen to deliver 
                solutions that drive real results. We believe in building long-term relationships 
                with our clients, understanding their unique challenges, and providing tailored 
                solutions that meet their specific needs.
              </p>

              <p> Call or text: +237670344547 or +237696013948 Email: Info@melah.cm</p>
            </motion.div>
            
            <motion.div 
              className="about-image fade-in-right"
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="image-placeholder">
                <img src={image}  />
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </>
    
  );
};

export default AboutSection;
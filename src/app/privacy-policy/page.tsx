import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Banner from '../components/Banner';
import ScrollTop from '../components/ScrollTop';

const PrivacyPolicy = () => {
    return (
        <div>
            <Header />
            <div >
                <Banner title='Privacy Policy' image='/term.png' />
            </div>
            <div className='flex justify-center pb-10 bg-white'>
                <div className='bg-white w-[85%]'>
                    <div className="">
                        <h2 className="text-[34px] font-semibold mb-1 text-[#444444]">Who we are</h2>
                        <p className="mb-4 text-[#676767]">Our website address is: https://hnsenergyproducts.com.</p>
                    </div>
                    <div className="">
                        <h2 className="text-[34px] font-semibold mb-1 text-[#444444]">What personal data we collect and why we collect it</h2>
                        <span className='text-[24px] font-semibold mb-1 text-[#444444]'>Comments</span>
                        <p className="mb-4 text-[#676767]">When visitors leave comments on the site we collect the data shown in the comments form, and also the visitor’s IP address and browser user agent string to help spam detection.</p>
                        <p className="mb-4 text-[#676767]">An anonymized string created from your email address (also called a hash) may be provided to the Gravatar service to see if you are using it. The Gravatar service privacy policy is available here: https://automattic.com/privacy/. After approval of your comment, your profile picture is visible to the public in the context of your comment.</p> 
                        <span className='text-[24px] font-semibold mb-1 text-[#444444]'>Media</span>
                        <p className="mb-4 text-[#676767]">If you upload images to the website, you should avoid uploading images with embedded location data (EXIF GPS) included. Visitors to the website can download and extract any location data from images on the website.</p> 
                    </div>
                    <div className="">
                        <span className='text-[24px] font-semibold mb-1 text-[#444444]'>Contact forms</span>
                        <span className='text-[24px] font-semibold mb-1 text-[#444444]'>Cookies</span>
                        <p className="mb-4 text-[#676767]">If you leave a comment on our site you may opt-in to saving your name, email address and website in cookies. These are for your convenience so that you do not have to fill in your details again when you leave another comment. These cookies will last for one year.</p>
                        <p className="mb-4 text-[#676767]">If you visit our login page, we will set a temporary cookie to determine if your browser accepts cookies. This cookie contains no personal data and is discarded when you close your browser.</p> 
                        <p className="mb-4 text-[#676767]">When you log in, we will also set up several cookies to save your login information and your screen display choices. Login cookies last for two days, and screen options cookies last for a year. If you select “Remember Me”, your login will persist for two weeks. If you log out of your account, the login cookies will be removed.</p> 
                        <p className="mb-4 text-[#676767]">If you edit or publish an article, an additional cookie will be saved in your browser. This cookie includes no personal data and simply indicates the post ID of the article you just edited. It expires after 1 day.</p> 
                    </div>
                    <div className="">
                        <span className='text-[24px] font-semibold mb-1 text-[#444444]'>Embedded content from other websites</span>
                        <p className="mb-4 text-[#676767]">Articles on this site may include embedded content (e.g. videos, images, articles, etc.). Embedded content from other websites behaves in the exact same way as if the visitor has visited the other website.</p>
                        <p className="mb-4 text-[#676767]">These websites may collect data about you, use cookies, embed additional third-party tracking, and monitor your interaction with that embedded content, including tracking your interaction with the embedded content if you have an account and are logged in to that website.</p> 
                    </div>
                    <div className="">
                        <span className='text-[24px] font-semibold mb-1 text-[#444444]'>Analytics</span>
                        <h2 className="text-[34px] font-semibold mb-1 text-[#444444]">Who we share your data with</h2>
                        <h2 className="text-[34px] font-semibold mb-1 text-[#444444]">How long we retain your data</h2>
                        <p className="mb-4 text-[#676767]">If you leave a comment, the comment and its metadata are retained indefinitely. This is so we can recognize and approve any follow-up comments automatically instead of holding them in a moderation queue.</p>
                        <p className="mb-4 text-[#676767]">For users that register on our website (if any), we also store the personal information they provide in their user profile. All users can see, edit, or delete their personal information at any time (except they cannot change their username). Website administrators can also see and edit that information.</p> 
                    </div>
                    <div className="">
                        <h2 className="text-[34px] font-semibold mb-1 text-[#444444]">What rights you have over your data</h2>
                        <p className="mb-4 text-[#676767]">If you have an account on this site, or have left comments, you can request to receive an exported file of the personal data we hold about you, including any data you have provided to us. You can also request that we erase any personal data we hold about you. This does not include any data we are obliged to keep for administrative, legal, or security purposes.</p>
                        <h2 className="text-[34px] font-semibold mb-1 text-[#444444]">Where we send your data</h2>
                        <p className="mb-4 text-[#676767]">Visitor comments may be checked through an automated spam detection service.</p> 
                    </div>
                    <div className="">
                        <h2 className="text-[34px] font-semibold mb-1 text-[#444444]">Your contact information</h2>
                        <h2 className="text-[34px] font-semibold mb-1 text-[#444444]">Additional information</h2>
                        <p className='text-[24px] font-semibold mb-1 text-[#444444]'>How we protect your data</p>
                        <p className='text-[24px] font-semibold mb-1 text-[#444444]'>What data breach procedures we have in place</p>
                        <p className='text-[24px] font-semibold mb-1 text-[#444444]'>What third parties we receive data from</p>
                        <p className='text-[24px] font-semibold mb-1 text-[#444444]'>What automated decision making and/or profiling we do with user data</p>
                        <p className='text-[24px] font-semibold mb-1 text-[#444444]'>Industry regulatory disclosure requirements</p>
                    </div>
                </div>
            </div>
            <Footer />
            <ScrollTop/>
        </div>
    );
}

export default PrivacyPolicy;

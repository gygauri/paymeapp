/*************************************************************************************
 * Description : This is a footer component.
 * @author : Gauri Yadav
 *************************************************************************************/
import React from 'react'
import facebook from '../images/facebook.png'
import instagram from '../images/instagram.png'
import linkedin from '../images/linkedin.png'
import twitter from '../images/twitter.png'
import payment from '../images/payment.png'
const footerData = [{
    product: 'Payment Link',
    company: 'About Us',
    developer: 'Contributors'
}, {
    product: 'Payment Gateway',
    company: 'Careers',
    developer: 'Documents'
}, {
    product: 'UPI',
    company: 'Blogs',
    developer: 'Adopters'
}
]

//This function is used to navigate to social networking websites on the click of their respective icons
const goToSite = (url) => {
    window.open(url, '_blank');
}
export default function Footer(){
    return (
        <div className="footerContainer">
        <div className="footerAlign">
            <div className="footerGrid padding">
                <div>Product
                </div>
                <div>Company
                </div>
                <div>Developer
            </div>
            </div>
            {footerData.map(footerObj => {
                return <div className="footerGrid"
                    key={'footer_' + footerObj.product}
                >
                    <div className="footeritem">{footerObj.product}
                    </div>
                    <div className="footeritem">{footerObj.company}
                    </div>
                    <div className="footeritem">{footerObj.developer}
                    </div>
                </div>
            })}
        </div>
        <div className="aboutpayme">
            <div className="paymefootrlogogrid"><div>
                <img width='60' height='59' src={payment} className="logo" alt="sitelogo" />
            </div>
                <div>PayMe is a payment application empowering multiple users across the globe.
               <div className="socialgrid">
                        <div>
                            <img width='25' onClick={() => goToSite('https://www.facebook.com/')} height='25' src={facebook} className="icon" alt="facebook" />
                        </div>
                        <div> <img width='25' onClick={() => goToSite('https://twitter.com/')} height='25' src={twitter} className="icon" alt="twitter" />
                        </div>
                        <div> <img width='25' onClick={() => goToSite('https://www.instagram.com/')} height='25' src={instagram} className="icon" alt="instagram" />
                        </div>
                        <div> <img width='25' onClick={() => goToSite('https://www.linkedin.com/')} height='25' src={linkedin} className="icon" alt="linkedin" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}
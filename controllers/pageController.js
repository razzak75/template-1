const path = require('path')


const showHomePage = (req,res) => {
    res.status(200).sendFile(path.join(__dirname, '../public/index.html'))
}

const index2 = (req,res) => {
    res.status(200).sendFile(path.join(__dirname, '../public/index-2.html'))
} 

const index02 = (req,res) => {
    res.status(200).sendFile(path.join(__dirname, '../public/index-02.html'))
}

const index03 = (req,res) => {
    res.status(200).sendFile(path.join(__dirname, '../public/index-03.html'))
}

const index04 = (req,res) => {
    res.status(200).sendFile(path.join(__dirname, '../public/index-04.html'))
}

const indexop = (req,res) => {
    res.status(200).sendFile(path.join(__dirname, '../public/index-op.html'))
}

const indexop1 = (req,res) => {
    res.status(200).sendFile(path.join(__dirname, '../public/index-op-01.html'))
}

const indexop2 = (req,res) => {
    res.status(200).sendFile(path.join(__dirname, '../public/index-op-02.html'))
}

const indexop3 = (req,res) => {
    res.status(200).sendFile(path.join(__dirname, '../public/index-op-03.html'))
}

const indexop4 = (req,res) => {
    res.status(200).sendFile(path.join(__dirname, '../public/index-op-04.html'))
}

const restaurant = (req,res) => {
    res.status(200).sendFile(path.join(__dirname, '../public/home-restaurant.html'))
}

const architecture = (req,res) => {
    res.status(200).sendFile(path.join(__dirname, '../public/home-architecture.html'))
}

const photography = (req,res) => {
    res.status(200).sendFile(path.join(__dirname, '../public/home-photography.html'))
}

const landing = (req,res) => {
    res.status(200).sendFile(path.join(__dirname, '../public/home-landing.html'))
}

const resume = (req,res) => {
    res.status(200).sendFile(path.join(__dirname, '../public/home-resume.html'))
}

const models = (req,res) => {
    res.status(200).sendFile(path.join(__dirname, '../public/home-models.html'))
}

const fitness = (req,res) => {
    res.status(200).sendFile(path.join(__dirname, '../public/home-fitness.html'))
}

const  about = (req,res) => {
    res.status(200).sendFile(path.join(__dirname, '../public/page-about.html'))
}

const  about2 = (req,res) => {
    res.status(200).sendFile(path.join(__dirname, '../public/page-about-2.html'))
}

const services = (req,res) => {
    res.status(200).sendFile(path.join(__dirname, '../public/page-services.html'))
}

const services2 = (req,res) => {
    res.status(200).sendFile(path.join(__dirname, '../public/page-services-2.html'))
}

const contact = (req,res) => {
    res.status(200).sendFile(path.join(__dirname, '../public/page-contact.html'))
}

const contact2 = (req,res) => {
    res.status(200).sendFile(path.join(__dirname, '../public/page-contact-2.html'))
}

const pricing = (req,res) => {
    res.status(200).sendFile(path.join(__dirname, '../public/page-pricing.html'))
}

const careers = (req,res) => {
    res.status(200).sendFile(path.join(__dirname, '../public/page-careers.html'))
}

const login = (req,res) => {
    res.status(200).sendFile(path.join(__dirname, '../public/page-login.html'))
}

const comingSoon = (req,res) => {
    res.status(200).sendFile(path.join(__dirname, '../public/page-coming-soon.html'))
}

const page404 = (req,res) => {
    res.status(200).sendFile(path.join(__dirname, '../public/page-404.html'))
}

const faq = (req,res) => {
    res.status(200).sendFile(path.join(__dirname, '../public/page-faq.html'))
}

const accordions = (req,res) => {
    res.status(200).sendFile(path.join(__dirname, '../public/elements-accordions.html'))
}

const alerts = (req,res) => {
    res.status(200).sendFile(path.join(__dirname, '../public/elements-alerts.html'))
}

const buttons = (req,res) => {
    res.status(200).sendFile(path.join(__dirname, '../public/elements-buttons.html'))
}

const countdowns = (req,res) => {
    res.status(200).sendFile(path.join(__dirname, '../public/elements-countdowns.html'))
}

const features = (req,res) => {
    res.status(200).sendFile(path.join(__dirname, '../public/elements-features.html'))
}

const forms = (req,res) => {
    res.status(200).sendFile(path.join(__dirname, '../public/elements-forms.html'))
}


const grid = (req,res) => {
    res.status(200).sendFile(path.join(__dirname, '../public/elements-grid.html'))
}

const col2 = (req,res) => {
    res.status(200).sendFile(path.join(__dirname, '../public/shop-2col.html'))
}

const col3 = (req,res) => {
    res.status(200).sendFile(path.join(__dirname, '../public/shop-3col.html'))
}

const col4 = (req,res) => {
    res.status(200).sendFile(path.join(__dirname, '../public/shop-4col.html'))
}

const shopSIngle = (req,res) => {
    res.status(200).sendFile(path.join(__dirname, '../public/shop-single.html'))
}

const shopCart = (req,res) => {
    res.status(200).sendFile(path.join(__dirname, '../public/shop-cart.html'))
}

const shopCheckout = (req,res) => {
    res.status(200).sendFile(path.join(__dirname, '../public/shop-checkout.html'))
}


module.exports = {showHomePage, index2, index02, index03, index04, indexop, indexop1, indexop2, indexop3, indexop4, restaurant, architecture, photography, landing, resume, models, fitness, about, about2, services, services2, contact, contact2, pricing, careers, login, comingSoon, page404, faq, accordions, alerts, buttons, countdowns, features, forms, grid, col2, col3, col4, shopSIngle, shopCart, shopCheckout}

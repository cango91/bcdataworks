import self from "../img/self.webp"
import mock1 from "../img/mock1.webp"
import mock2 from "../img/mock2.webp"
import mock3 from "../img/mock3.webp"
import mock4 from "../img/mock4.webp"
import mock5 from "../img/mock5.webp"

/* Hi there! Thanks for checking out my portfolio template. Be sure to read the comments to get a better understanding of
how to make this template work best for you! */

export let colors = ["rgb(0,255,164)", "rgb(166,104,255)"];
/*
I highly recommend using a gradient generator like https://gradientgenerator.paytonpierce.dev/ to generate a pair of colors that you like.
These colors will be used to style your name on the homepage, the background of your picture, and some other accents throughout
the site.
 */


/*
So let's get started! Some of the info below is pretty self-explanatory, like 'firstName' and 'bio'. I'll try to explain anything
that might not be obvious right off the bat :) I recommend looking at the template example live using "npm start" to get an idea
of what each of the values mean.
 */

export const info = {
    firstName: "Burak",
    lastName: "Ceylan",
    initials: "bc", // the example uses first and last, but feel free to use three or more if you like.
    position: "analist ve veri bilimciyim",
    selfPortrait: self, // don't change this unless you want to name your self-portrait in the "img" folder something else!
    gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
    baseColor: colors[0],
    miniBio: [ // these are just some "tidbits" about yourself. You can look at mine https://paytonjewell.github.io/#/ for an example if you'd like
        {
            emoji: '🌎',
            text: 'Türkiye\'de'
        },
        {
            emoji: "💼",
            text: "enpara.com'da analitik müdürü"
        },
        {
            emoji: "📧",
            text: "ceylann.burakk@gmail.com"
        }
    ],
    socials: [
        {
            link: "https://facebook.com/brkcyln92",
            icon: 'fab fa-facebook',
            label: 'facebook'
        },
        {
            link: "https://instagram.com/burakceylan.92",
            icon: 'fab fa-instagram',
            label: 'instagram'
        },
        {
            link: "https://medium.com/@ceylann.burakk",
            icon: "fa-brands fa-medium",
            label: 'medium'
        },
        {
            link: "https://www.linkedin.com/in/burak-ceylan92/",
            icon: "fab fa-linkedin",
            label: 'linkedin'
        },
        {
            link: "https://twitter.com/burakceylann",
            icon: "fab fa-twitter",
            label: 'twitter'
        }
        // Feel free to remove any of these that you don't have. I'll write an FAQ on how to add new ones later, let me know if you have a request for an icon!
        // Just change the links so that they lead to your social profiles.

    ],
    bio: "Hello! I’m Burak CEYLAN. I’am an analytics manager for Enpara.com. I studied Econometrics at Marmara Uni and I am Msc in BA-Finance. I am the author of “Uluslararası Ticarette Rekabet ve Kurumsal Yönetişim Kavramlarının Hisse Senedi Getirileri Üzerindeki Etkileri”.",
    skills:
    {
        proficientWith: ['Python', 'SQL', 'IBM SPSS', 'Stata', 'Eviews','R'],
        exposedTo: ['PowerBI', 'SAS','MatLAB']
    }
    ,
    hobbies: [
        {
            label: 'economics',
            emoji: '💹'
        },
        {
            label: 'philosophy',
            emoji: '🧐'
        },
        {
            label: 'history',
            emoji: '🎥'
        },

        // Same as above, change the emojis to match / relate to your hobbies or interests.
        // You can also remove the emojis if you'd like, I just think they look cute :P
    ],
    portfolio: [ // This is where your portfolio projects will be detailed
        {
            title: "Credit Risk Analytics and Forecasting in Banking",
            live: "https://paytonpierce.dev", //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
            source: "https://github.com/paytonjewell", // this should be a link to the **repository** of the project, where the code is hosted.
            image: mock1,
            description: 'Informing the C-level management about the bank\'s risk based on customers\' credit scores.',
        },
        {
            title: "Risk Monitoring and Modelling in Banking",
            live: "https://paytonpierce.dev",
            source: "https://github.com/paytonjewell",
            image: mock2,
            description: 'Analytical studies conducted for the management of the early warning system and the necessary actions.',
        },
        {
            title: "Customer Behavior Modelling in Agriculture",
            live: "https://paytonpierce.dev",
            source: "https://github.com/paytonjewell",
            image: mock3,
            description: 'Developing crm strategies, and also marketing analytics, designing customer journeys and segmentations.',
        },
        {
            title: "HR Analytics and R&D Project Management in Healthcare",
            live: "https://paytonpierce.dev",
            source: "https://github.com/paytonjewell",
            image: mock4,
            description: 'Conducting HR and Healthcare projects, analyzing workforce management and optimization, developing business process.',
        },
        {
            title: "Loss Adjustment Analysis in Insurance Industry",
            live: "https://paytonpierce.dev",
            source: "https://github.com/paytonjewell",
            image: mock5,
            description: 'Loss Adjustment and Risk Analysis for thermal power plants, stadiums, dams, wind turbines, etc.',
        }
    ],
    collabs: ["Academic Thesis Consultancy for IBM SPSS", "Process Management and Optimization Consultancy", "Customer Behavior Analysis and Segmentation", "Risk Segmentation and Forecasting", "Times Series Analysis Consultancy"],
    courses: ["Machine Learning Modelling (Clustering, Classification and Regression)", "From Statistics101 to Machine Learning with Python Courses", "Business Analytics Course with SQL and Python", "Academical Statistics Test Course with SPSS/Eviews", "Times Series Analysis with SPSS/Eviews/Python"],
}
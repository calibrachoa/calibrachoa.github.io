export default defineAppConfig({
  alpine: {
    title: 'Justine Pepin',
    description: 'Game Designer',
    image: {
      src: '/social-card-preview.png',
      alt: 'burned calibrachoa',
      width: 300,
      height: 300
    },
    header: {
      position: 'right', // possible value are : | 'left' | 'center' | 'right'
      logo: {
        path: '/logo.svg', // path of the logo
        pathDark: '/logo-dark.svg', // path of the logo in dark mode, leave this empty if you want to use the same logo
        alt: 'Justine Pepin' // alt of the logo
      }
    },
    footer: {
      credits: {
        enabled: false, // possible value are : true | false
        repository: 'https://www.github.com/nuxt-themes/alpine' // our github repository
      },
      navigation: true, // possible value are : true | false
      alignment: 'center', // possible value are : 'none' | 'left' | 'center' | 'right'
      message: 'Follow me on' // string that will be displayed in the footer (leave empty or delete to disable)
    },
    socials: {
      //twitter: 'nuxtlabs',
      //instagram: 'atinuxt',
      github: 'https://github.com/calibrachoa',
      linkedin: {
        icon: 'uil:linkedin',
        label: 'LinkedIn',
        href: 'https://ca.linkedin.com/in/justinepepin'
      }
    },
    form: {
      successMessage: 'Message sent. Thank you!'
    }
  }
})

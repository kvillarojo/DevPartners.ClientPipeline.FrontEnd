export default {
  items: [
    {
      name: 'Dashboard',
      url: '/dashboard',
      icon: 'icon-speedometer',
    },
    // {
    //   title: true,
    //   name: 'Theme',
    //   wrapper: {            // optional wrapper object
    //     element: '',        // required valid HTML5 element tag
    //     attributes: {}        // optional valid JS object with JS API naming ex: { className: "my-class", style: { fontFamily: "Verdana" }, id: "my-id"}
    //   },
    //   class: ''             // optional class names space delimited list for title item ex: "text-center"
    // },
    {
      name: 'Contact',
      url: '/contact',
      icon: 'fa fa-users',
      // children: [
      //   {
      //     name: 'Contact',
      //     url: '/contact',
      //     icon: 'fa fa-users',
      //   },
      //   {
      //     name: 'Profile',
      //     url: '/contact/profile',
      //     icon: 'fa fa-users',
      //   }
      // ]
    },
    {
      name: 'Companies',
      url: '/company',
      icon: 'fa fa-industry',
    },
    {
      name: 'Projects',
      url: 'project',
      icon: 'fa fa-file-text-o',
    }
  ],
};

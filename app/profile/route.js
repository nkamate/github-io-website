import Ember from 'ember';

export default Ember.Route.extend({
  model: function () {
    return [
      {
        events: [
          {
            year: '2015',
            info: [
              "Writing high level design specs for investigation capabilities of RSA Security Analytics",
              "Designed and implemented rich interactive web application for identifying suspicious activity in the network",
              "Worked closely with Product Management to identify the capabilities required to add more investigation capabilities to Security Analytics"
            ],
            title: 'Senior Software Engineer',
            id: 'sse',
            icon: 'ICON'
          },
          {
            year: '2012',
            info: [
              "Primary responsibilities include Lead, Plan & Design the modules with respect to functionality of product",
              "Design Wireframes to provide rich and uniform UX across the web application.",
              "Wireframes prototyped and cycled through customers and UX labs for validation.",
              "Built Alerting and Reporting capabilities for RSA Security Analytics Solution",
              "Unit testing of the modules by using frameworks like JUnit",
              "Delivered POC regarding choice of different technologies for product"
            ],
            title: 'Software Engineer',
            id: 'se',
            icon: 'ICON'
          },
          {
            year: '2011',
            info: [
              "Implement capabilities and features for the SIEM Solution, RSA enVision",
              "Identify Secure coding principles to eliminate SQL Injection, CSRF and XSS issues in the product",
              "Quickly learnt ExtJs and developed various modules for a Network forensics and Security Analytics solution",
              "Research on Visual representation of Network data to select the visualizations like world-map, parallel co-ordinates"
            ],
            title: 'Associate Software Engineer',
            id: 'ase',
            icon: 'ICON'
          },
          {
            year: '2010',
            info: [
              "Full-time college intern spent an year in development of an Event Data Repository",
              "Designed intuitive wireframes to align with user stories",
              "Research on Log parsing and Analysis",
              "Worked with Java, Maven, GWT"
            ],
            title: 'College Intern',
            id: 'intern',
            icon: 'ICON'
          },
          {
            year: '1997',
            info: [
              "Saw a Desktop Computer System running MS DOS. Learn't DOS commands and spent a lot of time playing Games"
            ],
            title: 'Met a Computer',
            id: 'first',
            icon: 'ICON'
          }
        ]
      }
    ];
  }
});

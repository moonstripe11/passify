const composeEmail = () => {
    return `
    <body>
    <style type="text/css">
    /* in line style goes here */
    .title {
      color: rgb(34, 214, 34);
    }
    .subtitle {
        color: rgb(99, 98, 98)
    }
    .header {
      margin: 0 auto;
      width: 650px;
      padding: 20px;
      text-align: center;
    }
    #line {
        text-align: center;
    }
    .dashboard-link {
      color: rgb(170, 25, 170);
    }
    .signature {
        margin-top: 50px;
    }
    .ps {
        margin-top: 50px;
    }
  </style>
  <!-- add icon in the h1 -->
  <div class="header">
    <h1 class="title">Welcome to the Passify Family!</h1>
    <h2 class="subtitle">Together we will keep your credentials safe and secure.</h2>
  </div>
  <h3 id="line">________________________________________________________________________________</h3>
  <div class="content">
    <h4>
      At Passify, your credential security is our first priority. When we
      started back in 2020, we set out with one goal in mind, to create a
      platform that allows people to rest easy knowing knowing their website
      logins are safe from breaches. Every time you login into our
      Application, we run a fresh check to make sure that your logins are safe
      and that you are receivingt he most recent breach check each time you
      login. You are easily able to view the security rating of each login you
      desire on our dashboard. I hope you can rest easy at night as part of
      the Passify family.
    </h4>
    <div class="new-features">
        <h3>The Newest Features of Passify:</h3>
    <ul>
      <li>Password Generator</li>
      <li>Strength of Password Algorithm</li>
      <!-- consider making this a  list with links to those part of our webpage-->
      <!-- ex: <li><a href="https://www.chubbiesshorts.com/" target="_blank"><strong>Chubbies</strong></a></li> -->
    </ul>
    </div>
    
    <h3 class="coming-soon">New Features Coming Soon!</h3>
    <h4 class="chrome-extension">
      Including our new Passify Chrome Extension set to be released in 2021!
    </h4>
  </div>
  <div class="footer">
    <!-- add <a href="our deployed url" -->
    <h2 class="dashboard-link">View your Credential Dashboard here</h2>
    <!-- add animation if possible to make it blinking different colors -->
  </div>
  <div class="signature">
      <p>Sincerely,</p>
      <p>The Passify Team</p>
  </div>
  <div class="ps">
      <p>If you have a questions or concerns, please email: passifyteam@yahoo.com and one of our team members will get back to you within 2 business days.</p>
  </div>
</body>`;
};

module.exports = composeEmail();

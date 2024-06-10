function Format(res){
    const html = `

    <div class="post-preview mb-1 col-md-10 col-lg-6 col-xl-6">
                            <a href="post.html">
                                <h2 class="post-title">Metal Contraband Up-Coming Metal Radio Add Dates:</h2>
                                <p class="post-meta">
                                    September 24, 2023
                                </p>
                                <h3 class="post-subtitle">Problems look mighty small from 150 miles up</h3>
                            </a>
                        </div>
    
    `;

    return html;
}

const getPosts = async () => {
    const response = await fetch('http://localhost/wordpress/headless1/wp-json/wp/v2/posts', {
      method: 'GET',
      //body: myBody, // string or object
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const myJson = await response.json(); //extract JSON from the http response

    const result = myJson.map(Format);

    document.getElementById("primary-content-section").innerText=result;

    console.log(myJson);
  }

const getEditorial = async () => {
    const response = await fetch('http://localhost/wordpress/headless1/wp-json/wp/v2/posts?categories=4', {
      method: 'GET',
      //body: myBody, // string or object
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const myJson = await response.json(); //extract JSON from the http response
    console.log(myJson);
}

const getTourDates = async () => {
    const response = await fetch('http://localhost/wordpress/headless1/wp-json/wp/v2/posts?categories=5', {
      method: 'GET',
      //body: myBody, // string or object
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const myJson = await response.json(); //extract JSON from the http response
    console.log(myJson);
}

const getQA = async () => {
    const response = await fetch('http://localhost/wordpress/headless1/wp-json/wp/v2/posts?categories=6', {
      method: 'GET',
      //body: myBody, // string or object
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const myJson = await response.json(); //extract JSON from the http response
    console.log(myJson);
}

const getAdDates = async () => {
    const response = await fetch('http://localhost/wordpress/headless1/wp-json/wp/v2/posts?categories=7', {
      method: 'GET',
      //body: myBody, // string or object
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const myJson = await response.json(); //extract JSON from the http response
    console.log(myJson);
}


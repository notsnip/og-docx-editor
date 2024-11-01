<!-- PROJECT LOGO -->
<br />
<div align="center">

  <h3 align="center">OG Docs Editor</h3>

  <p align="center">
    Google-Docs inspired, a light docx editor!
    <br />
    <a href=""><strong>Visit »</strong></a>
    <br />
    <br />
  </p>
</div>

<!-- ABOUT THE PROJECT -->

## About The Project

[![](https://markdown-videos-api.jorgenkh.no/youtube/4KhH4bGzTUc)](https://www.youtube.com/watch?v=4KhH4bGzTUc)


A Google Docs inspired awesome docs editor. Built with React, Quill, Tailwind CSS , Socket.io and MongoDB.

Here's what's available:

- Multi user collaborative functionality using websockets and node/express backend server
- Advanced markdown editor with features like text alignment, text sizing images, colors, list headings and many more.
- Easily access and manage your documents (documents are saved to database)


<!-- ### Built With

[![React][React.js]][React-url]
![](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)

<p align="right">(<a href="#readme-top">back to top</a>)</p> -->

<!-- GETTING STARTED -->


#### Why is the deployed project is not working?
While I'm excited to share OG Docs with you, its current deployment on Render's free tier has limitations due to the inherent restrictions of free hosting platforms. Unfortunately, free hosting options does not offer robust websocket functionality, which is crucial for OG Docs' full potential.

I'm currently unable to invest in paid hosting for the project. Therefore, I kindly request you to test OG Docs' functionalities directly on your local machine. This will allow you to experience the full range of features without the limitations of free hosting.

## Getting Started

### Prerequisites

Install dependencies in `/api`
and `/client`

```sh
npm install
```

Environment variables in `api/.env`
```
DB_USER= MongoDB Username 
DB_PASS= MongoDB Password
CLIENT_URL= Client Origin (eg. example.com)
```

Environment variables in `client/.env`
```/
VITE_API_URL= Backend endpoint
`````

<!-- ROADMAP -->

## Roadmap

- [ ] Skeleton and bar loading
- [ ] Make responsive 
- [ ] Header

### Future Plans
- [ ] Add login & signup (google auth)
- [ ] Homepage : Showcase created docs, with links. Docs should be sorted by date of completion

<!-- CONTRIBUTING -->

## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<!-- LICENSE -->

## License

Distributed under the MIT License. See `LICENSE.txt` for more information.


<!-- CONTACT -->

## Contact

Github Handle- [@realsnipc](https://github.com/notsnip)
Twiiter Handle- [@realsnipc](https://twitter.com/asksnip)
Linkedin Handle- [@realshaurya](https://linkedin.com/in/realshaurya)

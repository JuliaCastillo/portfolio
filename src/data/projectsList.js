import hoppersScreenshot from "../assets/img/edinburghhoppers.png";
import weScreenshot from "../assets/img/womenempowered.png";

export const projectsList = [
  {
    title: "Edinburgh Hoppers website",
    description: (
      <>
        <p>
          A website for Edinburgh Hoppers, a society for women, non-binary and
          transgender people in Informatics at the University of Edinburgh.
        </p>

        <p>
          It was developed by me and Aparna Rajeev, a fellow committee member,
          using Jekyll, HTML5, CSS3 and mutiple JavaScript libraries. I was in
          charge of designing and implementing the home page as well as the
          about us, events and sponsors pages.
        </p>
      </>
    ),
    codeLink: "https://github.com/edinburgh-hoppers/website_new",
    demoLink: "https://edinburghhoppers.com/",
    image: hoppersScreenshot,
    imageAlt: "Screenshot of the Edinburgh Hoppers website's homepage",
  },

  {
    title: "Women Empowered website - Schedule section",
    description: (
      <>
        <p>
          A website for Women Empowered, a conferance in celebration of
          International Women’s Day and aimed to commemorate the achievements of
          women in different fields and to advocate for the acceleration of
          gender parity and inclusivity.
        </p>

        <p>
          It was developed using Jekyll, HTML5, CSS3 and JavaScript. I was in
          charge of designing and implementing the schedule section, where I
          used a JavaScript library called Papa Parse to retrieve the schedule
          information from a Google Sheets document, which was then processed
          and displayed.
        </p>
      </>
    ),
    codeLink: "https://github.com/edinburgh-hoppers/WEwebsite",
    demoLink: "https://womenempowered.space/#schedule",
    image: weScreenshot,
    imageAlt: "Screenshot of the Women Empowered website's schedule section",
  },
];

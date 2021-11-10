import hoppersScreenshot from "../assets/img/edinburghhoppers.png";
import SpaceOdysseyScreenshot from "../assets/img/SpaceOdyssey2021.png";
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
          using Jekyll, HTML5, CSS3 and multiple JavaScript libraries. I was in
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
    title: "Space Odyssey 2021 - Class project",
    description: (
      <>
        <p>
          A website to learn about the planets and space, with quizzes and
          authentication to save your progress.
        </p>

        <p>
          This was a group project, where the others designed the illustrations
          and I was in charge of developing the website, using HTML5, CSS3,
          JavaScript, JQuery, AJAX, a NASA API and the FatFree framework (a PHP
          framework).
        </p>
      </>
    ),
    codeLink: "https://github.com/JuliaCastillo/space-odyssey-2021-beta",
    demoLink: "https://space21.edinburgh.domains/fatfree/SpaceOdyssey2021/",
    image: SpaceOdysseyScreenshot,
    imageAlt: "Screenshot of the Space Odyssey 2021 website's homepage",
  },

  {
    title: "Women Empowered website - Schedule section",
    description: (
      <>
        <p>
          A website for Women Empowered, a conference in celebration of
          International Women’s Day and aimed to commemorate the achievements of
          women in different fields and to advocate for the acceleration of
          gender parity and inclusivity.
        </p>

        <p>
          It was developed using Jekyll, HTML5, CSS3, JavaScript and JQuery. I
          was in charge of designing and implementing the schedule section,
          where I used a JavaScript library called Papa Parse to dynamically
          retrieve the schedule information from a Google Sheets document, which
          was then processed and displayed using JQuery.
        </p>
      </>
    ),
    codeLink: "https://github.com/edinburgh-hoppers/WEwebsite",
    demoLink: "https://womenempowered.space/#schedule",
    image: weScreenshot,
    imageAlt: "Screenshot of the Women Empowered website's schedule section",
  },
];

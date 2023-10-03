const Footer = () => {
  return (
    <footer className="fixed bottom-0 w-screen text-center font-bold text-base max-sm:text-sm text-Dark-blue p-4 max-sm:p-2 bg-Very-light-gray border-t border-Dark-blue">
      Challenge by
      <a
        className="text-Moderate-blue ml-2 hover:text-Soft-Red hover:underline"
        href="https://www.frontendmentor.io/challenges/interactive-comments-section-iG1RugEG9"
        target="_blank"
      >
        Frontend Mentor
      </a>
      . Coded by
      <a
        className="text-Moderate-blue ml-2 hover:text-Soft-Red hover:underline"
        href="https://www.frontendmentor.io/profile/SoulRvr29"
      >
        Paweł Chudecki
      </a>
      .
    </footer>
  );
};

export default Footer;

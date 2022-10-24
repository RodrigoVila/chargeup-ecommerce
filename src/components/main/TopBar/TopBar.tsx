import CartButton from '@main/Buttons/CartButton';
import UserButton from '@main/Buttons/UserButton';
import LoginButton from '@main/Buttons/LoginButton';
import NavItems from '@main/NavItems';
import Logo from '@main/Logo';
import { useEffect } from 'react';

const TopBar = () => {

  useEffect(() => {
    const targets = document.querySelectorAll(".show-on-scroll");

    // Callback for IntersectionObserver
    const callback = function (entries) {
      entries.forEach(entry => {
        // Is the element in the viewport?
        if (entry.isIntersecting) {
          // Add the fadeIn class:
          entry.target.classList.add("motion-safe:animate-fadeIn");
        } else {
          // Otherwise remove the fadein class
          entry.target.classList.remove("motion-safe:animate-fadeIn");
        }
      });
    };

    // Set up a new observer
    const observer = new IntersectionObserver(callback);
    // Loop through each of the target
    targets.forEach(function (target) {
      // Hide the element
      target.classList.add("opacity-0");
      // Add the element to the watcher
      observer.observe(target);
    });
  }, [])

  return (
    <div className="items-center justify-between hidden w-full xl:flex show-on-scroll">
      <Logo color="blur" />
      <NavItems direction="row" />
      <div className="z-20 flex items-center justify-center mr-2">
        <UserButton />
        <CartButton />
      </div>
    </div>
  );
};

export default TopBar;

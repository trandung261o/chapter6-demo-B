import { useEffect } from 'react';
import { Button } from '@extension/ui';
import { useStorage } from '@extension/shared';
import { exampleThemeStorage } from '@extension/storage';

export default function App() {
  const theme = useStorage(exampleThemeStorage);

  useEffect(() => {
    console.log('content ui loaded');
    // Run the functions when the DOM is fully loaded
    // window.addEventListener('load', function () {
    //   addToggleButton();
    // });

    // return () => window.removeEventListener('load', addToggleButton);
  }, []);

  // Function to add toggle button
  function addToggleButton() {
    // Select the target element before which the button should be added
    const targetElement = document.querySelector('.app--row--E-WFM.app--dashboard--Z4Zxm');

    if (targetElement) {
      // Create the toggle button
      const toggleButton = document.createElement('button');
      toggleButton.innerText = 'Clean Window';

      // Style the button
      toggleButton.style.backgroundColor = '#3498db';
      toggleButton.style.color = '#fff';
      toggleButton.style.border = 'none';
      toggleButton.style.padding = '10px 20px';
      toggleButton.style.borderRadius = '5px';
      toggleButton.style.boxShadow = '0px 2px 5px rgba(0, 0, 0, 0.2)';
      toggleButton.style.cursor = 'pointer';
      toggleButton.style.marginBottom = '10px';

      // Add the toggle functionality
      toggleButton.addEventListener('click', function () {
        // Get the height of the element with the specified classes
        const headerElement: any = document.querySelector('.app--row--E-WFM.app--header--QuLOL');
        const headerHeight = headerElement ? headerElement.offsetHeight : 0;

        if (window.scrollY !== headerHeight) {
          window.scrollTo({
            top: 0, // Scroll to the top of the page
            left: 0, // No horizontal scroll
            behavior: 'smooth', // Smooth scrolling
          });
          console.log(window.scrollY);
        }

        // Select the button with the data-purpose attribute
        const specifiedButton: any = document.querySelector('[data-purpose="sidebar-button-close"]');

        if (specifiedButton) {
          specifiedButton.click(); // Programmatically click the button
        }

        // Toggle the shaka-control-bar element
        const shakaElement: any = document.querySelector('.shaka-control-bar--control-bar-container--OfnMI');
        if (shakaElement) {
          const currentVisibility = shakaElement.style.visibility;
          shakaElement.style.visibility = currentVisibility === 'hidden' ? 'visible' : 'hidden';
        }

        // Toggle the video-viewer-title-overlay element
        const videoTitleElement: any = document.querySelector('.video-viewer--header-gradient--x4Zw0');
        if (videoTitleElement) {
          const currentVisibility = videoTitleElement.style.visibility;
          videoTitleElement.style.visibility = currentVisibility === 'hidden' ? 'visible' : 'hidden';
        }

        // Toggle the video-viewer-title-overlay element
        const shadowbar: any = document.querySelector('.video-viewer--title-overlay--YZQuH');
        if (shadowbar) {
          const currentVisibility = shadowbar.style.visibility;
          shadowbar.style.visibility = currentVisibility === 'hidden' ? 'visible' : 'hidden';
        }

        const curriculumElements: any = document.querySelectorAll(
          '.curriculum-item-view--scaled-height-limiter--lEOjL.curriculum-item-view--no-sidebar--LGmz-',
        );
        curriculumElements.forEach(function (element: any) {
          element.style.maxHeight = 'calc(100vh - 35px)';
        });

        if (window.scrollY !== headerHeight) {
          // Then, after scrolling to the top, scroll down by the header height
          setTimeout(function () {
            window.scrollBy({
              top: headerHeight, // Scroll vertically by the header height
              left: 0, // No horizontal scroll
              behavior: 'smooth', // Smooth scrolling
            });
            console.log(window.scrollY);
          }, 500); // Delay to ensure the first scroll is completed
        }
      });

      // Insert the button before the target element
      targetElement?.parentNode?.insertBefore(toggleButton, targetElement);
    }
  }

  return (
    <div className="flex items-center justify-between gap-2 rounded bg-blue-100 px-2 py-1">
      <div className="flex gap-1 text-blue-500">
        Edit <strong className="text-blue-700">pages/content-ui/src/app.tsx</strong> and save to reload.
      </div>
      <Button theme={theme} onClick={exampleThemeStorage.toggle}>
        Toggle Theme
      </Button>
    </div>
  );
}

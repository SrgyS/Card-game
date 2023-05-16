import { renderLevelPageComponent } from "./components/level-page-component.js";
import {
    LEVEL_PAGE,
    // CARDS_PAGE,
    // RESULT_PAGE
} from "./routes.js";

let page = null;

const goToPage = (newPage) => {
    if (
        [
          LEVEL_PAGE,
        //   CARDS_PAGE,
        //   RESULT_PAGE,
        ].includes(newPage)
      ) {
        if (newPage === LEVEL_PAGE) {
            page = LEVEL_PAGE;
          return renderApp();
        }
    
        // if (newPage === CARDS_PAGE) {
        //   renderApp();
        // }
    
        // if (newPage === RESULT_PAGE) {
        //   renderApp();
        // }
    
        page = newPage;
        renderApp();
        return;
      }   
      throw new Error("страницы не существует");
    };

    export const renderApp = () => {
        const appEl = document.getElementById("app");
        if (page === LEVEL_PAGE) {
          return renderLevelPageComponent({
            appEl,
          });
        }
      
        // if (page === CARDS_PAGE) {
        //   return renderCardsPageComponent({
        //     appEl,
        //       goToPage,
        //     });
        // }
      
        // if (page === RESULT_PAGE) {
        //   return renderResultPageComponent({
        //     appEl,
        //     // onAddPostClick({ description, imageUrl }) {
        //     //   // TODO: реализовать добавление поста в API
        //     //   // addPost({token: getToken(), description, imageUrl})
        //     //   console.log("Добавляю пост...", { description, imageUrl });
        //     //   goToPage(POSTS_PAGE);
        //     } 
        //   );
        // }
      
      };
      
      goToPage(LEVEL_PAGE);
const pagesKey = "pages";

let pagesJson = localStorage.getItem(pagesKey);
let pageStore = JSON.parse(pagesJson);

export default {
  addPage(page) {
    pagesStore.push(page);
    localStorage.setItem(pagesKey, JSON.stringify(pagesStore));
  },
  getAllPages() {
    return pageStore;
  },

  getSinglePage(index) {
    return pageStore[index];
  },

  editPage(index, page) {
    pagesStore[index] = page;

    localStorage.setItem(pagesKey, JSON.stringify(pageStore));
  },
};

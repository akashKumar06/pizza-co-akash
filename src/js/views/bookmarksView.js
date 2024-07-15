import icons from 'url:../../img/icons.svg';
import View from './view.js';
import previewView from './previewView.js';

class ResultsView extends View {
  _parentElement = document.querySelector('.bookmarks__list');
  _erroMessage = 'No bookmarks yet. Find a nice recipe and bookmark it :)';
  _message = '';

  addHandlerRender(handler) {
    window.addEventListener('load', handler);
  }
  _generateMarkup() {
    return this._data
      .map(bookmark => previewView.render(bookmark, false))
      .join('');
  }
}
const rv = new ResultsView();
export default rv;

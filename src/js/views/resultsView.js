import icons from 'url:../../img/icons.svg';
import View from './view.js';
import previewView from './previewView.js';
class ResultsView extends View {
  _parentElement = document.querySelector('.results');
  _erroMessage = 'No recipes found for your query! Please try again later';
  _message = '';

  _generateMarkup() {
    return this._data.map(result => previewView.render(result, false)).join('');
  }
}
const rv = new ResultsView();
export default rv;

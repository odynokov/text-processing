import ARI from './automated-readability-index';
import CLI from './coleman-liau-index';
import FKI from './flesch-kincaid-index';
import SMOG from './smog-index';

export default text => {
  const result = ((ARI(text) + CLI(text) + FKI(text) + SMOG(text)) / 4).toFixed(2) / 1;

  return isFinite(result) ? result : 0;
};

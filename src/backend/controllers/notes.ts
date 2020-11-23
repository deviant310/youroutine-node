import { List, Item, RequestItem } from 'types/notes';
import { Controller } from 'types/middleware';

const list = [
  {
    id: 1,
    title: 'Заметка 123',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sed urna vel nulla varius congue. Nunc tempor efficitur egestas. Fusce sapien purus, porta pellentesque luctus non, facilisis nec ante. Nunc laoreet magna vel tempor elementum. Duis finibus lectus at mauris malesuada, nec blandit neque aliquam. Quisque urna dui, eleifend eget nisi vel, aliquam rhoncus odio. Integer tempor, dui eu molestie aliquam, eros nulla pharetra leo, quis consectetur orci orci id mi. Donec id nulla mi.'
  },
  {
    id: 2,
    title: 'Еще одна заметка',
    description: 'Quisque pellentesque massa at ante bibendum semper. Nunc egestas orci vel nulla auctor porta. Ut ultrices, mauris sed hendrerit feugiat, arcu metus tristique leo, non auctor ex nisi sit amet purus. Suspendisse rutrum vehicula nisi eu aliquam. In ullamcorper nisl sit amet urna aliquet faucibus. Nulla id cursus tortor, nec blandit sapien. Etiam posuere turpis ac elit fringilla rutrum. Fusce ullamcorper tellus et neque vehicula auctor. Vivamus et magna et orci eleifend fermentum ut quis lacus. Pellentesque cursus dui sed mi commodo, ac hendrerit nisl laoreet. Nullam gravida faucibus vulputate. Sed vehicula nisl vel orci bibendum tincidunt. Phasellus velit ex, vehicula id neque at, feugiat tincidunt quam. Sed vitae enim ut justo tempus sollicitudin sed eget sapien. Vivamus laoreet elit varius ipsum facilisis malesuada quis ut nunc.'
  },
  {
    id: 3,
    title: 'Третья заметка',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sed urna vel nulla varius congue. Nunc tempor efficitur egestas. Fusce sapien purus, porta pellentesque luctus non, facilisis nec ante. Nunc laoreet magna vel tempor elementum. Duis finibus lectus at mauris malesuada, nec blandit neque aliquam. Quisque urna dui, eleifend eget nisi vel, aliquam rhoncus odio. Integer tempor, dui eu molestie aliquam, eros nulla pharetra leo, quis consectetur orci orci id mi. Donec id nulla mi.'
  },
];

class Notes implements Controller {
  list() : List {
    return list
  }
  
  get(request: RequestItem) : Item {
    let { id } = request;
    return list.find(item => item.id === id) || {id: 0, title: '', description: ''};
  }
}

export default Notes;
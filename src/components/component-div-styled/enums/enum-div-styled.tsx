import { includeAllDefaultFonts, includeAllValues } from "../utils/util-div-styled";

export const DefaultColorList: string[] = [
    'indianred',
    'lightcoral',
    'salmon',
    'darksalmon',
    'lightsalmon',
    'crimson',
    'red',
    'firebrick',
    'darkred',
    'pink',
    'lightpink',
    'hotpink',
    'deeppink',
    'mediumvioletred',
    'palevioletred',
    'coral',
    'tomato',
    'orangered',
    'darkorange',
    'orange',
    'gold',
    'yellow',
    'lightyellow',
    'lemonchiffon',
    'lightgoldenrodyellow',
    'papayawhip',
    'moccasin',
    'peachpuff',
    'palegoldenrod',
    'khaki',
    'darkkhaki',
    'lavender',
    'thistle',
    'plum',
    'violet',
    'orchid',
    'fuchsia',
    'magenta',
    'mediumorchid',
    'mediumpurple',
    'blueviolet',
    'darkviolet',
    'darkorchid',
    'darkmagenta',
    'purple',
    'rebeccapurple',
    'indigo',
    'mediumslateblue',
    'slateblue',
    'darkslateblue',
    'greenyellow',
    'chartreuse',
    'lawngreen',
    'lime',
    'limegreen',
    'palegreen',
    'lightgreen',
    'mediumspringgreen',
    'springgreen',
    'mediumseagreen',
    'seagreen',
    'forestgreen',
    'green',
    'darkgreen',
    'yellowgreen',
    'olivedrab',
    'olive',
    'darkolivegreen',
    'mediumaquamarine',
    'darkseagreen',
    'lightseagreen',
    'darkcyan',
    'teal',
    'aqua',
    'cyan',
    'lightcyan',
    'paleturquoise',
    'aquamarine',
    'turquoise',
    'mediumturquoise',
    'darkturquoise',
    'cadetblue',
    'steelblue',
    'lightsteelblue',
    'powderblue',
    'lightblue',
    'skyblue',
    'lightskyblue',
    'deepskyblue',
    'dodgerblue',
    'cornflowerblue',
    'royalblue',
    'blue',
    'mediumblue',
    'darkblue',
    'navy',
    'midnightblue',
    'cornsilk',
    'blanchedalmond',
    'bisque',
    'navajowhite',
    'wheat',
    'burlywood',
    'tan',
    'rosybrown',
    'sandybrown',
    'goldenrod',
    'darkgoldenrod',
    'peru',
    'chocolate',
    'saddlebrown',
    'sienna',
    'brown',
    'maroon',
    'white',
    'snow',
    'honeydew',
    'mintcream',
    'azure',
    'aliceblue',
    'ghostwhite',
    'whitesmoke',
    'seashell',
    'beige',
    'oldlace',
    'floralwhite',
    'ivory',
    'antiquewhite',
    'linen',
    'lavenderblush',
    'mistyrose',
    'gainsboro',
    'lightgray',
    'lightgrey',
    'silver',
    'darkgray',
    'darkgrey',
    'gray',
    'grey',
    'dimgray',
    'dimgrey',
    'lightslategray',
    'lightslategrey',
    'slategray',
    'slategrey',
    'darkslategray',
    'darkslategrey',
    'black'
];

export const PersonalizedColor: string[] = [ 
    'ps-brand-blue',
    'ps-brand-red',
    'ps-card-blue',
    'ps-red',
    'ps-orange',
    'ps-yellow',
    'ps-purple',
    'ps-green',
    'ps-dark-blue',
    'ps-bright-blue',
    'ps-light-blue',
    'ps-black',
    'ps-gray-1',
    'ps-gray-2',
    'ps-gray-3',
    'ps-gray-4',
    'ps-gray-5',
    'ps-white'
];

let ColorList: string[] = [''];
ColorList = includeAllValues(ColorList, DefaultColorList);
ColorList = includeAllValues(ColorList, PersonalizedColor);

export { ColorList };

let FontList = [''];
FontList = includeAllDefaultFonts(FontList);

export { FontList };
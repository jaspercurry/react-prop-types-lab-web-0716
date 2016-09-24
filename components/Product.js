const React = require('react');

class Product extends React.Component {
  render() {
    return (
      <div></div>
    )
  }


}

Product.defaultProps = {
hasWatermark: false,
}





Product.propTypes  = {
name: React.PropTypes.string.isRequired,
producer: React.PropTypes.string,
hasWatermark: React.PropTypes.bool,
color: React.PropTypes.oneOf(['white', 'eggshell-white', 'salmon']).isRequired,
weight: weightCheck
}


function weightCheck(props, propName, componentName) {
   componentName = componentName || 'ANONYMOUS';
   if (props[propName] == null) {
     let value = props[propName];
     if (isRequired) {
       return new Error(
         ("Required")
       )
     }
   }
   else if (props[propName]) {
     let value = props[propName];
     if (typeof value !== 'number') {
       return new Error(
         ("Required to be a number")
       )
     } else if (value < 80 || value > 300){
       return new Error(
         ("Required to be between 80 and 300")
       )
     }
   }
   return null;
 }







function rightRange(props, propName, componentName) {
  componentName = comopnentName || 'ANONYMOUS';
  if (props[propName] == null) {
    let value = props[propName];
    if (isRequired) {
      return new Error(
               ("Required")
      )
    }
  } else if (props[propName]) {
    let value = props[propName];
    if (typeof value !== 'number') {
      return new Error(
               ("Required to be a number")
      )
    }
  } else if (value < 80 || value > 300) {
    return new Error( ("Must be between 80 and 300") )
  }
return null;
}

module.exports = Product

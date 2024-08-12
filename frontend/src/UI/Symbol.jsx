export default function Symbol({ image, alt, size }) {
  let cssClasses
  if (size === 'large') {
    cssClasses = 'symbol-large'
  }
  if (size === 'small') {
    cssClasses = 'symbol-small'
  }

  return <img src={image} alt={alt} className={cssClasses} />
}

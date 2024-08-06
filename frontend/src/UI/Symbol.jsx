export default function Symbol({ image, alt, size }) {
  let imageSize
  if (size === 'large') {
    imageSize = '84'
  }
  if (size === 'small') {
    imageSize = '36'
  }

  return <img src={image} alt={alt} width={imageSize} height={imageSize} />
}

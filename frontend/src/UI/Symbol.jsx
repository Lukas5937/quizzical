export default function Symbol({ image, alt, size }) {
  let imageSize
  size === 'large' ? (imageSize = '84') : (imageSize = '36')

  return <img src={image} alt={alt} width={imageSize} height={imageSize} />
}

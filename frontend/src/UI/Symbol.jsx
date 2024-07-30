export default function Symbol({ image, alt, size }) {
  let imageSize
  size === 'large' ? (imageSize = '72') : (imageSize = '48')

  return <img src={image} alt={alt} width={imageSize} height={imageSize} />
}

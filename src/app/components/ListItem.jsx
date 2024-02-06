import Image from 'next/image'

function ListItem({src,alt}) {
  return (
    <div className='listItem'>
      <Image src={src} priority='true' alt={alt} className='img'/>
    </div>
  )
}

export default ListItem
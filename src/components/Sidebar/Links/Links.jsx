import { motion } from "framer-motion";

const variants= {
 open: {
  transition: {
    staggerChildren: 0.1,
  }
 },
 closed: {
  transition: {
    staggerChildren: 0.05,
    staggerDirection: -1,
  }
 }
}

const itemsVariants= {
 open: {
  y: 0,
  opacity: 1,
},
closed: {
  y: 50,
  opacity: 0,
 }
}

function Links() {
  const items = [
    "Homepage",
    "About",
    "Services",
    "Gallery",
    "Contact",
  ]
 
  return (
    <motion.div className='links' variants={variants}>
      {items.map(item=>(
        <motion.a href={`#${item}`} key={item} variants={itemsVariants}>{item} </motion.a>
      ))}
    </motion.div>
  )
}

export default Links
import React from 'react'

export const Footer = () => {
  let style = {
    position: "absolute",
    top: "150vh",
    width: "100%",
    background:"black",
    color: "white",
    textAlign: "revert"

  }
  return (
    <footer className='bg dark' style={style}>

      <p >copyright &copy; picker.com</p>

    </footer>
  )
}



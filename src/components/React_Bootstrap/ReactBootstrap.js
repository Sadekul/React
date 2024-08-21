import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const ReactBootstrap = () => {
  return (
    <Card className="m-2">
         <Card.Img variant="top" src="https://picsum.photos/200/100" />
        <Card.Body>
      <Card.Title>Card Title</Card.Title>
      <Card.Text>he best way to consume React-Bootstrap is via the npm package which you can install with npm (or yarn if you prefer).
        If you plan on customizing the Bootstrap Sass files, or don't want to use a CDN for the stylesheet, it may be helpful to install vanilla</Card.Text>
        <Button variant="danger">Learn more</Button>
        </Card.Body>
    </Card>
  )
}

export default ReactBootstrap

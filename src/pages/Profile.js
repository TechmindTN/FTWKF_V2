import React, {useState, useEffect} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faBoxOpen, faCartArrowDown, faChartPie, faChevronDown, faClipboard, faCommentDots, faFileAlt, faPlus, faRocket, faStore } from '@fortawesome/free-solid-svg-icons';
import { Col, Row, Card, Form, Button, InputGroup } from '@themesberg/react-bootstrap';

import { Link } from 'react-router-dom';
import Datetime from "react-datetime";
import { faCalendarAlt,faPaperclip } from '@fortawesome/free-solid-svg-icons';

export const Profile = () =>  {
  const [id,  setId]=useState('')
  useEffect(() => {
    setId(window.localStorage.getItem("id"));
  }, []);
  const [first_name, setFname] = useState();
  const [last_name, setLname] = useState();
  const [country, setCountry] = useState();
  const [state, setState] = useState();
  const [city, setCity] = useState();
  const [address, setAddress] = useState();
  const [phone, setPhone] = useState();
  const [cin, setCin] = useState();
  const [role, setRole] = useState();
  const [categorie, setCategorie] = useState();
  const [licences, setLicences] = useState();
  useEffect(() => {
 
    fetch(`https://cc3d-197-0-144-55.eu.ngrok.io/api/pro/${window.localStorage.getItem("id")}/`,{
      headers: {'Content-Type': 'application/x-www-form-urlencoded','Authorization':'TOKEN 7d724f4762ff08ebbf6aa9a8534ef4c737c1f9462b9acf43b2b108ade86c90d5',  'Access-Control-Allow-Methods': 'Accept'},
      withCredentials: false
   })
      .then(async (response) => {
      
    const data = await response.json();
   console.log(data)
   setCountry(data.country)
   setFname(data.first_name)
   setLname(data.last_name)
   setPhone(data.phone)
 

      })
    
  }, []);


    return (
      <Card border="light" className="bg-white shadow-sm mb-4">
        <Card.Body>
          <h5 className="mb-4">Informations Generales </h5>
          <Form >
            <Row>
            
              <Col md={6} className="mb-3">
                <Form.Group id="firstName">
                  <Form.Label>Nom</Form.Label>
                  <Form.Control required type="text" id="first_name" name="first_name" 
                  autoComplete="off" value={first_name}
                                    />
                </Form.Group>
              </Col>
              <Col md={6} className="mb-3">
                <Form.Group id="lastName">
                  <Form.Label>Prenom</Form.Label>
                  <Form.Control required type="text" id="lname" name="lname" placeholder="votre prenom"
                                  autoComplete="off" value={last_name}
                                 
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row className="align-items-center">
              <Col md={6} className="mb-3">
                <Form.Group id="birthday"  name="birthday" >
                  <Form.Label>Date de naissance</Form.Label>
                  <Datetime
                    timeFormat={false}
                   
                    renderInput={(props, openCalendar) => (
                      <InputGroup>
                        <InputGroup.Text><FontAwesomeIcon icon={faCalendarAlt} /></InputGroup.Text>
                        <Form.Control
                          required
                          type="text" id="birthday"  name="birthday"
                        
                          placeholder="mm/dd/yyyy"
                          onFocus={openCalendar}
                          autoComplete="off" 
                          />
                      </InputGroup>
                    )} />
                </Form.Group>
              </Col>
              <Col md={6} className="mb-3">
                <Form.Group id="gender">
                  <Form.Label>Gendre</Form.Label>
                  <Form.Select id="gender"  name="gender"
                                  autoComplete="off" 
                               
                  >
                    <option value="0">Gender</option>
                    <option value="1">Femme</option>
                    <option value="2">Homme</option>
                  </Form.Select>
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col md={6} className="mb-3">
                <Form.Group id="emal">
                  <Form.Label>Email</Form.Label>
                  <Form.Control required type="email" id="email"  
                                  autoComplete="off" 
                                 
                  name="email" placeholder="name@company.com" />
                </Form.Group>
              </Col>
              <Col md={6} className="mb-3">
                <Form.Group id="phone">
                  <Form.Label>Téléphone</Form.Label>
                  <Form.Control required type="number" value={phone}
                                                  autoComplete="off" 
                                     
                  id="phone"  name="phone" placeholder="+12-345 678 910" />
                </Form.Group>
              </Col>
            </Row>
  
            <h5 className="my-4">Address</h5>
            <Row>
              <Col sm={9} className="mb-3">
                <Form.Group id="address">
                  <Form.Label>Address</Form.Label>
                  <Form.Control required type="text" id="address"  name="address" 
                                                  autoComplete="off" 
                                                
                  placeholder="Enter your home address" />
                </Form.Group>
              </Col>
              <Col sm={3} className="mb-3">
                <Form.Group id="addressNumber">
                  <Form.Label>Numero</Form.Label>
                  <Form.Control required type="number" placeholder="No."  id=""  name=""/>
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col sm={4} className="mb-3">
                <Form.Group id="country">
                  <Form.Label>country</Form.Label>
                  <Form.Control required type="text" placeholder="country"  id="country"  name="country"
                  value={country}
                  autoComplete="off" 
                                              
                  />
                </Form.Group>
              </Col>
              <Col sm={4} className="mb-3">
                <Form.Group className="mb-2">
                  <Form.Label>Gouvernerat</Form.Label>
                  <Form.Select id="city"   name="cityt"
                  
                  autoComplete="off"
                  
                  >
                    <option value="0">State</option>
                    <option value="AL">Alabama</option>
                    <option value="AK">Alaska</option>
                    <option value="AZ">Arizona</option>
                    <option value="AR">Arkansas</option>
                    <option value="CA">California</option>
                    <option value="CO">Colorado</option>
                    <option value="CT">Connecticut</option>
                    <option value="DE">Delaware</option>
                    <option value="DC">District Of Columbia</option>
                    <option value="FL">Florida</option>
                    <option value="GA">Georgia</option>
                    <option value="HI">Hawaii</option>
                    <option value="ID">Idaho</option>
                    <option value="IL">Illinois</option>
                    <option value="IN">Indiana</option>
                    <option value="IA">Iowa</option>
                    <option value="KS">Kansas</option>
                    <option value="KY">Kentucky</option>
                    <option value="LA">Louisiana</option>
                    <option value="ME">Maine</option>
                    <option value="MD">Maryland</option>
                    <option value="MA">Massachusetts</option>
                    <option value="MI">Michigan</option>
                    <option value="MN">Minnesota</option>
                    <option value="MS">Mississippi</option>
                    <option value="MO">Missouri</option>
                    <option value="MT">Montana</option>
                    <option value="NE">Nebraska</option>
                    <option value="NV">Nevada</option>
                    <option value="NH">New Hampshire</option>
                    <option value="NJ">New Jersey</option>
                    <option value="NM">New Mexico</option>
                    <option value="NY">New York</option>
                    <option value="NC">North Carolina</option>
                    <option value="ND">North Dakota</option>
                    <option value="OH">Ohio</option>
                    <option value="OK">Oklahoma</option>
                    <option value="OR">Oregon</option>
                    <option value="PA">Pennsylvania</option>
                    <option value="RI">Rhode Island</option>
                    <option value="SC">South Carolina</option>
                    <option value="SD">South Dakota</option>
                    <option value="TN">Tennessee</option>
                    <option value="TX">Texas</option>
                    <option value="UT">Utah</option>
                    <option value="VT">Vermont</option>
                    <option value="VA">Virginia</option>
                    <option value="WA">Washington</option>
                    <option value="WV">West Virginia</option>
                    <option value="WI">Wisconsin</option>
                    <option value="WY">Wyoming</option>
                  </Form.Select>
                </Form.Group>
              </Col>
              <Col sm={4}>
                <Form.Group id="zip">
                  <Form.Label>Code Postal</Form.Label>
                  <Form.Control required type="tel" placeholder="ZIP" />
                </Form.Group>
              </Col>
            </Row>
            <h5 className="my-4">Infromations Complementaires</h5>
            <Row>
              <Col sm={4} className="mb-3">
                <Form.Group id="addrclubess">
                  <Form.Label>Club</Form.Label>
                  <Form.Select name="club" id="club"    
                    >
        <option value="0" >Choisir votre club </option>
        <option value="1">Athlete</option>
        <option value="2">Entraineur</option>
        <option value="3">Président de club</option>
        <option value="4">Arbitre</option>
      </Form.Select>
                 
                </Form.Group>
              </Col>
              <Col sm={4} className="mb-3">
                <Form.Group id="addressNumber">
                  <Form.Label>Descipline</Form.Label>
                  <Form.Control required type="number" placeholder="No." id="sport"  name="sport"
                                
                  />
                </Form.Group>
              </Col>
              <Col sm={4} className="mb-3">
                <Form.Group id="addressNumber">
                  <Form.Label>Ligue</Form.Label>
                  <Form.Control required type="number" placeholder="No." id="ligue"  name="ligue"
                                            
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col sm={4} className="mb-3">
                <Form.Group id="city">
                  <Form.Label>Age</Form.Label>
                  <Form.Control required type="text" placeholder="City" id="age"  name="age"
                  
                 
                  />
                </Form.Group>
              </Col>
          
              <Col sm={4}>
                <Form.Group id="identite">
                  <Form.Label>Photo d'identite</Form.Label>
                  <div className="file-field">
              <div className="d-flex justify-content-xl ">
                <div className="d-flex">
                  <span className="icon icon-md">
                    <FontAwesomeIcon icon={faPaperclip} className="me-3" />
                  </span>
                  <input type="file" id="identite"  name="identite" required    
                 />
                  <div className="d-md-block text-start">
                    <div className="fw-normal text-dark mb-1">Choisir Image</div>
                    <div className="text-gray small">JPG, GIF, PDF ou PNG</div>
                  </div>
                </div>
              </div>
            </div>
                </Form.Group>
              </Col>
              <Col sm={4}>
                <Form.Group id="medical">
                  <Form.Label>Certificat Médicale</Form.Label>
                  <div className="file-field">
              <div className="d-flex justify-content-xl ">
                <div className="d-flex">
                  <span className="icon icon-md">
                    <FontAwesomeIcon icon={faPaperclip} className="me-3" />
                  </span>
                  <input type="file"  id="medical"  name="medical"     required    autoComplete="off"
                 />
                  <div className="d-md-block text-start"> 
                    <div className="fw-normal text-dark mb-1">Choisir Image</div>
                    <div className="text-gray small">JPG, GIF, PDF ou PNG</div>
                  </div>
                </div>
              </div>
            </div>
                </Form.Group>
              </Col>
            </Row>
            <div className="mt-3">
              <Button variant="primary" type="submit">Enregistrer</Button>
            </div>
          </Form>
        </Card.Body>
      </Card>

  );
};
export default(Profile)

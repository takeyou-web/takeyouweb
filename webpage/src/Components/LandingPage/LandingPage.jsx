
import React from 'react';
import { Container, Row, Col, Image, Accordion } from 'react-bootstrap';
import styles from './LandingPage.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import logo from "../../assets/logo_white.svg";
import bussinesmodel from "../../assets/bussinesmodel.png";
import bussinesmodel2 from "../../assets/bussinesmodel2.png";








const LandingPage = () => {

  return (

    <div >
      <div className={styles.background}>

        <Container >
          <Row>
            <Col>

              <div className={styles.mainsection}>

                <Image src={logo} fluid />

              </div>

            </Col>
          </Row>
        </Container>

        <Container >
          <Row>
            <Col lg={12} sm={12} >
              <div className="py-3 py-lg-4"></div>

              <h4 className='text-light'>Our Mission Statement</h4>
              <h1 className='py-3'><b><span>To give a drive for a better world,</span>  and <br />  rase any
                <span> boundaries</span></b></h1>
              <p>
                Take You <span>is the one </span> commute-ridesharing app <span>that provides </span> students,
                coworkers, and hitch-hikers
                <span> with </span> the chance to arrive at their destination while polluting less and having less
                traffic <span>because</span> we want to change the vision of ridesharing. <span>Unlike </span>
                our competitors, we strive to save the planet while we drive.
              </p>
              <div className="py-5"></div>
            </Col>
          </Row>
        </Container>

      </div>

      <div className="py-lg-4"></div>

      <Container >
        <Row>
          <Col lg={12} sm={12} >
            <h2>Our Values</h2>
            <hr />
          </Col>
        </Row>
      </Container>

      <div className="py-lg-5"></div>

      {/* <Container >
        <Row>
          <Col lg={3} sm={12} >
            <p className={styles.borders}>trusting</p>
          </Col>
          <Col lg={3} sm={12} >
            <p className={styles.borders}>transparent</p>
          </Col>
          <Col lg={3} sm={12} >
            <p className={styles.borders}>equality</p>
          </Col>
          <Col lg={3} sm={12} >
            <p className={styles.borders}>inclusive</p>
          </Col>
        </Row>
        <div className="py-2"></div>
        <Row>
          <Col lg={3} sm={12} >
            <p className={styles.borders}>inspiring</p>
          </Col>
          <Col lg={3} sm={12} >
            <p className={styles.borders}>user-friendly</p>
          </Col>
          <Col lg={3} sm={12} >
            <p className={styles.borders}>minimalist</p>
          </Col>
          <Col lg={3} sm={12} >
            <p className={styles.borders}>eco-friendly</p>
          </Col>
        </Row>
      </Container> */}

      <Container className={styles.values}>
        <Row>
          <Col lg={4} sm={12} >
            <h3 className='text-center'><b>Sustainability</b></h3>
            <div className="py-3"></div>
            <p>because we search to help the planet <br /> and reduce the pollution</p>
          </Col>
          <Col lg={4} sm={12} >
            <h3 className='text-center'><b>Collaboration</b></h3>
            <div className="py-3"></div>
            <p>because we try through our app to make people help each other and make friendships and to make a community </p>
          </Col>
          <Col lg={4} sm={12} >
            <h3 className='text-center'><b>Innovation</b></h3>
            <div className="py-3"></div>
            <p>because we try to innovate every time and ease everyone lives </p>
          </Col>
        </Row>
      </Container>

      <div className="py-3 py-lg-5"></div>
      <Container >
        <Row>
          <Col lg={12} sm={12} >
            <h2 >Our Business Model</h2>
            <hr />

          </Col>
        </Row>
      </Container>

      <Container >
        <Row>
          <Col lg={6} sm={12} >
            <div className="py-2"></div>
            <Image src={bussinesmodel} fluid />
            <div className="py-3"></div>

            <Image src={bussinesmodel2} fluid />


          </Col>

          <Col lg={6} sm={12} >
            <Accordion>
              <Accordion.Item eventKey="0">
                <Accordion.Header className={styles.accordion_title}><p>Departments</p></Accordion.Header>
                <Accordion.Body>
                  <ul className={styles.accordion_text}>
                    <li>Product Development Team</li>
                    <li>Web Development</li>
                    <li>Marketing Team</li>
                    <li>Business Partners (Future Investors)</li>
                    <li>Car rental companies</li>
                    <li>Accounting</li>
                    <li>Legal Team</li>
                    <li>Gas Stations</li>
                    <li>Electric power stations</li>
                  </ul>

                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header className={styles.accordion_title}><p>KEY ACTIVITIES</p></Accordion.Header>
                <Accordion.Body>
                  <ul className={styles.accordion_text}>
                    <li> Product & Platform Development (App Building) & Testing</li>
                    <li>Marketing & Promotions</li>
                    <li> Community Growth</li>
                    <li>Customer Service</li>
                    <li>Building Business Partnerships</li>
                    <li>Funding the project (Investors)</li>
                  </ul>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header className={styles.accordion_title}><p>KEY RESOURCES</p></Accordion.Header>
                <Accordion.Body>
                  <ul className={styles.accordion_text}>
                    <li>Human Resources - Drivers</li>
                    <li>Technological Resources - Web Platforms & App / IT Infrastructure</li>
                  </ul>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3">
                <Accordion.Header className={styles.accordion_title}><p>VALUE PROPOSITION</p></Accordion.Header>
                <Accordion.Body>
                <ul className={styles.accordion_text}>
                    <h4><b>The Drivers </b></h4>
                    <li>Travel cost reduction.</li>
                    <li>Socialising - building a community.</li>
                    <li>Flexible, second income.</li>
                    <li>Reducing the pollution.</li>
                    <div className="py-2"></div>

                    <h4><b>The Passengers  </b></h4>
                    <li>Money & Time Saving.</li>
                    <li>Security for finding a ride anytime</li>
                    <li>Comfort</li>
                    <li>Socialising - building a community.</li>
                    <li>Reducing the pollution.</li>
                    <div className="py-2"></div>

                    <h4><b>The Hitch-hiker</b></h4>
                    <li>Security for finding a ride no matter where you are.</li>
                    <li>Potentially saving a lot of time.</li>
                    <li>Physical safety and comfort.</li>
                    <div className="py-2"></div>
                  </ul>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="4">
                <Accordion.Header className={styles.accordion_title}><p>CUSTOMER RELATIONS</p></Accordion.Header>
                <Accordion.Body>
                  <ul className={styles.accordion_text}>
                    <li>Automated Services</li>
                    <li>Education - Onboarding</li>
                    <li>Customer Support</li>
                  </ul>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="5">
                <Accordion.Header className={styles.accordion_title}><p>CHANNELS</p></Accordion.Header>
                <Accordion.Body>
                <ul className={styles.accordion_text}>
                    <li>Website / Web & Mobile App</li>
                    <li>Social Media Marketing</li>
                    <li>Word of mouth</li>
                    <li>SEO</li>
                    <li>Emal Marketing</li>
                    <li>Billboards/ Posters</li>
                    <li>Stickers</li>
                  </ul>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="6">
                <Accordion.Header className={styles.accordion_title}><p>CUSTOMER SEGMENTS</p></Accordion.Header>
                <Accordion.Body>
                  <ul className={styles.accordion_text}>
                    <li>The Drivers</li>
                    <li>The Passangers</li>
                    <li>The Hitch-hikers</li>
                    <li>B2B: Companies with multiple employees to transport</li>
                  </ul>
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="7">
                <Accordion.Header className={styles.accordion_title}><p>COST STRUCTURE</p></Accordion.Header>
                <Accordion.Body>
                <ul className={styles.accordion_text}>
                    <li>Cost of Platform & Product Development</li>
                    <li>Cost of Hosting Servers / IT System</li>
                    <li>Contractors : Marketing / Design / Branding</li>
                    <li>Taxes</li>
                  </ul>
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="8">
                <Accordion.Header className={styles.accordion_title}><p>REVENUE STREAMS</p></Accordion.Header>
                <Accordion.Body>
                  <ul className={styles.accordion_text}>
                    <li>In-app / Website Advertising</li>
                    <li>Commission fee from driver rides (depending on the ride lenght)</li>
                    <li>Commission increase based on car type (diesel, gasoline, electric)</li>
                    <li>Data-selling (in the future)</li>
                    <li>Subscription-based strategy for companies that would want to use TakeYou internally as a way of managing employee transport.</li>
                  </ul>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>

          </Col>
        </Row>
      </Container>

      <div className="py-5"></div>
      <div className="py-5"></div>
      <div className="py-2"></div>


      <div className={styles.background2}>
        <div className="py-3"></div>

        <Carousel className={styles.carousel}>
          <Carousel.Item interval={10000}>
            <div className="py-3"></div>
            <h1 class="text-center text-light">Dan Mustafa</h1>
            <h3 class="text-center">The Driver</h3>

            <div className={styles.card}>
              <div className="py-4"></div>
              <Container >
                <Row>
                  <Col lg={6} sm={12} >
                    <h3 className='text-left text-light'><b>What is their life story? <br /> What is their background?</b></h3>
                    <p class="mb-0 px-3"><small>He drives a Peugeot car. He is a family man, </small></p>

                    <p class="mb-0 px-3"><small>The average factory
                      worker.</small></p>

                    <p class="mb-0 px-3"><small>He has to pay a lot of bills for his house and family. He needs to
                      save as much money as he can. He would get 10 people in its car if he could.</small>
                    </p>
                    {/* <p class="mb-0"><small>He will hear about TakeYou on TikTok or another social. He understood
                      he could save some money and started using it.</small></p> */}
                  </Col>
                  <Col lg={6} sm={12} >
                    <h3 className='text-left text-light'><b>What is stopping them? <br /> What obstacles do they have?</b></h3>
                    <p class="mb-0 px-3"><small>Pays too much on the gas for driving to work alone.</small></p>
                    <p class="mb-0 px-3"><small>He’s lonely - he needs some company for the longer rides. </small>
                    </p>
                    <p class="mb-0 px-3"><small>He’s concerned about the climate state of the planet and wants to do
                      better.</small></p>
                  </Col>

                </Row>
              </Container>

              <div className="py-2"></div>

              <Container >
                <Row>

                  <Col lg={6} sm={12}  >
                    <h3 className='text-left text-light'><b>What do they expect or seek? <br /> What are their goals?</b></h3>

                    <p class="mb-0 px-3"><small>To make some money and save some money.</small></p>
                    <p class="mb-0 px-3"><small>Searching for community on his road to work.</small></p>

                  </Col>
                  <Col lg={6} sm={12}  >
                    <h3 className='text-left text-light'><b>What motivates our customer? <br /> Why choose TakeYou?</b></h3>

                    <p class="mb-0 px-3"><small>He’s earning money.</small></p>
                    <p class="mb-0 px-3"><small>Company for the long rides to work.</small></p>
                    <p class="mb-0 px-3"><small>A second income with a flexible schedule.</small></p>
                    <p class="mb-0 px-3"><small>He establishes new relationships.</small></p>

                  </Col>
                </Row>
              </Container>



              <div className="py-3"></div>

            </div>
            <div className="py-4"></div>

          </Carousel.Item>

          <Carousel.Item interval={10000}>
            <div className="py-3"></div>
            <h1 class="text-center text-light">Roberto</h1>
            <h3 class="text-center">The Passenger</h3>

            <div className={styles.card}>

              <div className="py-4"></div>

              <Container >
                <Row>
                  <Col lg={6} sm={12} >
                    <h3 className='text-left text-light'><b>What is their life story? <br /> What is their background?</b></h3>
                    <p class="mb-0 px-3"><small>Going to work daily. Always going with a friend. His friend cant go to work, but he looks for another solution, finding the app.</small></p>
                    <p class="mb-0 px-3"><small>He finds marketing materials (posters&billboards) in the city. Gets inspired to search for the app.</small></p>
                    {/* <p class="mb-0"><small>He hears about TakeYou from word-of- mouth at the workplace.</small></p> */}
                  </Col>
                  <Col lg={6} sm={12}  >
                    <h3 className='text-left text-light'><b>What is stopping them? <br /> What obstacles do they have?</b></h3>
                    <p class="mb-0"><small>They don’t have a car or a driver licence.</small></p>
                    <p class="mb-0"><small>They don’t have anyone to go to work with.</small> </p>
                    <p class="mb-0"><small>He has a driver licence. The girlfriend uses the car so he has no other option.</small></p>
                  </Col>
                </Row>
              </Container>

              <div className="py-3"></div>

              <Container >
                <Row>
                  <Col lg={6} sm={12}  >
                    <h3 className='text-left text-light'><b>What do they expect or seek? <br /> What are their goals?</b></h3>
                    <p class="mb-0 px-3"><small>To arrive from point A to point B safely and comfortly every day.</small></p>
                    <p class="mb-0 px-3"><small>To save some money and time</small></p>
                    <p class="mb-0 px-3"><small>To find a fast and safely solution.</small></p>

                  </Col>
                  <Col lg={6} sm={12}  >
                    <h3 className='text-left text-light'><b>What motivates our customer? <br /> Why choose TakeYou?</b></h3>
                    <p class="mb-0"><small>Saving money</small></p>
                    <p class="mb-0"><small>Doesn’t get to deal with stressful traffic</small></p>
                    <p class="mb-0"><small>Motivation for helping the environment</small></p>
                  </Col>
                </Row>
              </Container>

            </div>
            <div className="py-4"></div>

          </Carousel.Item>

          <Carousel.Item interval={10000}>
            <div className="py-3"></div>
            <h1 class="text-center text-light">Federico</h1>
            <h3 class="text-center">The Hitch Hiker</h3>

            <div className={styles.card}>

              <div className="py-4"></div>

              <Container >
                <Row>
                  <Col lg={6} sm={12} >
                    <h3 className='text-left text-light'><b>What is their life story? <br /> What is their background?</b></h3>
                    <p class="mb-0 px-3"><small>He likes partying and needs a ride back home.</small></p>
                    <p class="mb-0 px-3"><small>A hippie. Party goer and likes travelling.</small></p>
                    <p class="mb-0 px-3"><small>He’s eco friendly - cares about nature. All peace and love.</small></p>
                    <p class="mb-0 px-3"><small>He travels outside the city. But inside the city aswell. So he might see the posters around the city.</small></p>
                  </Col>
                  <Col lg={6} sm={12}  >
                    <h3 className='text-left text-light'><b>What is stopping them? <br /> What obstacles do they have?</b></h3>

                    <p class="mb-0 px-3"><small>He doesnt have any money.</small></p>
                    <p class="mb-0 px-3"><small>He has no driving licence or car.</small></p>
                    <p class="mb-0 px-3"><small>No money. Spent too much for weed or cigarettes.</small></p>


                  </Col>
                </Row>
              </Container>

              <div className="py-3"></div>

              <Container >
                <Row>
                  <Col lg={6} sm={12}  >
                    <h3 className='text-left text-light'><b>What do they expect or seek? <br /> What are their goals?</b></h3>
                    <p class="mb-0"><small>To travel fast, safely, and cheap.</small></p>
                    <p class="mb-0"><small>Economic drive and to save the environment.</small> </p>
                    <p class="mb-0"><small>reating an adventure and meeting new people.</small></p>

                  </Col>
                  <Col lg={6} sm={12}  >
                    <h3 className='text-left text-light'><b>What motivates our customer? <br /> Why choose TakeYou?</b></h3>
                    <p class="mb-0"><small>Reaching his destination fast - without waiting on the highway waiting for someone to pick him up.</small></p>
                    <p class="mb-0"><small>He doesn’t pay a lot. A cheaper ride.</small></p>
                    <p class="mb-0"><small>Travel safety.</small></p>
                  </Col>
                </Row>
              </Container>

            </div>
            <div className="py-4"></div>

          </Carousel.Item>

        </Carousel>
        <div className="py-3"></div>

      </div>

      <div>
        <div className="py-3 py-lg-5"></div>
        <Container >
          <Row>
            <Col lg={12} sm={12} >
              <h2><b>Revenue Streams</b></h2>
              <hr />
            </Col>

          </Row>
          <div className="py-3 py-md-4"></div>

          <Row>
            <Col lg={4} sm={12} >
              <p className={styles.borders}>In-app / Website Advertising</p>
            </Col>
            <Col lg={4} sm={12} >
              <p className={styles.borders}>Data-selling (in the future)</p>
            </Col>
            <Col lg={4} sm={12} >
              <p className={styles.borders}>Commission increase based on car</p>
            </Col>
          </Row>
          <div className="py-3"></div>
          <Row>
            <Col lg={6} sm={12} >
              <p className={styles.borders}>Commission fee from driver rides</p>
            </Col>
            <Col lg={6} sm={12} >
              <p className={styles.borders}>Subscription-based strategy for companies</p>
            </Col>

          </Row>

          <div className="py-3"></div>

          <Row>
            <Col lg={12} sm={12} >
              <h2 ><b>Our Visionary Scale</b></h2>
              <hr />
              <div className="py-3"></div>
              <p><span className={styles.color_grey}>1Y-</span> Application ready to launch and have a community.</p>
              <p><span className={styles.color_grey}>2Y-</span> New features. App used in more european country.</p>
              <p><span className={styles.color_grey}>5Y-</span> Expanding all over Europe, own transportations and employees. Business collaborations.</p>
              <p><span className={styles.color_grey}>15Y-</span> Become the Unicorn Brand, known globally.</p>

            </Col>


          </Row>
        </Container>
        <div className="py-3 py-md-5"></div>

      </div>

    </div>

  )
}

export default LandingPage;
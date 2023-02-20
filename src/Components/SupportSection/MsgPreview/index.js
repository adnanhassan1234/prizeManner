import React from 'react'
import user1 from "Images/user1.png";
import userlogo from "Images/userlogo.png";
import { Form } from 'react-bootstrap';
import classes from "./index.module.scss";
const MsgPreview = () => {
  return (
      <div className={classes.msgPreview}>
        <div className={classes.chat_header}>
          <div className={classes.userInfo}>
            <div className={classes.description}>
              <h6>Marcus Curtis</h6>
              <div className={classes.text}>MAYWART22@gmail.com</div>
            </div>
          </div>
          <div className={classes.description}>
            <h6>Support ID: 1235CA2B2</h6>
            <Form className='custom-form'>
              {['checkbox',].map((type) => (
                  <div key={`default-${type}`} classNameName="mb-3">
                    <Form.Check
                        type={type}
                        id={`default-${type}`}
                        label='Mark as complete'
                    />
                  </div>
              ))}
            </Form>
          </div>
        </div>
        <div className={classes.mesgs}>
          <div className={classes.msg_history}>
            <div className={classes.incoming}>
              <div className={classes.userImg}>
                <img src={userlogo} alt="username" />
              </div>
              <div className={classes.description}>
                <div className={classes.text}>
                  Test which is a new approach to have all solutions
                  <div className={classes.time}> 11:01 AM</div>
                </div>
              </div>
              <div className={classes.description}>
                <div className={classes.text}>
                  Test which is a new approach to have all solutions. Test
                  which is a new approach to have all solutions
                  <div className={classes.time}> 11:01 AM</div>
                </div>
              </div>
              <div className={classes.description}>
                <div className={classes.text}>
                  Test which is a new approach to have all solutions. Test
                  which is a new approach to
                  <div className={classes.time}> 11:01 AM</div>
                </div>
              </div>
            </div>
            <div className={classes.outgoing}>
              <div className={classes.userImg}>
                <img src={user1} alt="username" />
              </div>
              <div className={classes.description}>
                <div className={classes.text}>
                  Test which is a new approach to have all solutions
                  <div className={classes.time}> 11:01 AM</div>
                </div>
              </div>
              <div className={classes.description}>
                <div className={classes.text}>
                  Test which is a new approach to have all solutions. Test
                  which is a new approach to have all solutions
                  <div className={classes.time}> 11:01 AM</div>
                </div>
              </div>
              <div className={classes.description}>
                <div className={classes.text}>
                  Test which is a new approach to have all solutions. Test
                  which is a new approach to
                  <div className={classes.time}> 11:01 AM</div>
                </div>
              </div>
            </div>
            <div className={classes.incoming}>
              <div className={classes.userImg}>
                <img src={userlogo} alt="username" />
              </div>
              <div className={classes.description}>
                <div className={classes.text}>
                  Test which is a new approach to have all solutions
                  <div className={classes.time}> 11:01 AM</div>
                </div>
              </div>
              <div className={classes.description}>
                <div className={classes.text}>
                  Test which is a new approach to have all solutions. Test
                  which is a new approach to have all solutions
                  <div className={classes.time}> 11:01 AM</div>
                </div>
              </div>
              <div className={classes.description}>
                <div className={classes.text}>
                  Test which is a new approach to have all solutions. Test
                  which is a new approach to
                  <div className={classes.time}> 11:01 AM</div>
                </div>
              </div>
            </div>
            <div className={classes.outgoing}>
              <div className={classes.userImg}>
                <img src={user1} alt="username" />
              </div>
              <div  className={classes.description}>
                <div  className={classes.text}>
                  Test which is a new approach to have all solutions
                  <div  className={classes.time}> 11:01 AM</div>
                </div>
              </div>
              <div  className={classes.description}>
                <div  className={classes.text}>
                  Test which is a new approach to have all solutions. Test
                  which is a new approach to have all solutions
                  <div  className={classes.time}> 11:01 AM</div>
                </div>
              </div>
              <div  className={classes.description}>
                <div  className={classes.text}>
                  Test which is a new approach to have all solutions. Test
                  which is a new approach to
                  <div  className={classes.time}> 11:01 AM</div>
                </div>
              </div>
            </div>
            <div  className={classes.incoming}>
              <div className={classes.userImg}>
                <img src={userlogo} alt="username" />
              </div>
              <div  className={classes.description}>
                <div  className={classes.text}>
                  Test which is a new approach to have all solutions
                  <div  className={classes.time}> 11:01 AM</div>
                </div>
              </div>
              <div  className={classes.description}>
                <div  className={classes.text}>
                  Test which is a new approach to have all solutions. Test
                  which is a new approach to have all solutions
                  <div  className={classes.time}> 11:01 AM</div>
                </div>
              </div>
              <div  className={classes.description}>
                <div  className={classes.text}>
                  Test which is a new approach to have all solutions. Test
                  which is a new approach to
                  <div  className={classes.time}> 11:01 AM</div>
                </div>
              </div>
            </div>
            <div className={classes.outgoing}>
              <div className={classes.userImg}>
                <img src={user1} alt="username" />
              </div>
              <div  className={classes.description}>
                <div  className={classes.text}>
                  Test which is a new approach to have all solutions
                  <div  className={classes.time}> 11:01 AM</div>
                </div>
              </div>
              <div  className={classes.description}>
                <div  className={classes.text}>
                  Test which is a new approach to have all solutions. Test
                  which is a new approach to have all solutions
                  <div  className={classes.time}> 11:01 AM</div>
                </div>
              </div>
              <div  className={classes.description}>
                <div  className={classes.text}>
                  Test which is a new approach to have all solutions. Test
                  which is a new approach to
                  <div  className={classes.time}> 11:01 AM</div>
                </div>
              </div>
            </div>
            <div  className={classes.incoming}>
              <div className={classes.userImg}>
                <img src={userlogo} alt="username" />
              </div>
              <div  className={classes.description}>
                <div  className={classes.text}>
                  Test which is a new approach to have all solutions
                  <div  className={classes.time}> 11:01 AM</div>
                </div>
              </div>
              <div  className={classes.description}>
                <div  className={classes.text}>
                  Test which is a new approach to have all solutions. Test
                  which is a new approach to have all solutions
                  <div  className={classes.time}> 11:01 AM</div>
                </div>
              </div>
              <div  className={classes.description}>
                <div  className={classes.text}>
                  Test which is a new approach to have all solutions. Test
                  which is a new approach to
                  <div  className={classes.time}> 11:01 AM</div>
                </div>
              </div>
            </div>
            <div className={classes.outgoing}>
              <div className={classes.userImg}>
                <img src={user1} alt="username" />
              </div>
              <div  className={classes.description}>
                <div  className={classes.text}>
                  Test which is a new approach to have all solutions
                  <div  className={classes.time}> 11:01 AM</div>
                </div>
              </div>
              <div  className={classes.description}>
                <div  className={classes.text}>
                  Test which is a new approach to have all solutions. Test
                  which is a new approach to have all solutions
                  <div  className={classes.time}> 11:01 AM</div>
                </div>
              </div>
              <div  className={classes.description}>
                <div  className={classes.text}>
                  Test which is a new approach to have all solutions. Test
                  which is a new approach to
                  <div  className={classes.time}> 11:01 AM</div>
                </div>
              </div>
            </div>
            <div  className={classes.incoming}>
              <div className={classes.userImg}>
                <img src={userlogo} alt="username" />
              </div>
              <div  className={classes.description}>
                <div  className={classes.text}>
                  Test which is a new approach to have all solutions
                  <div  className={classes.time}> 11:01 AM</div>
                </div>
              </div>
              <div  className={classes.description}>
                <div  className={classes.text}>
                  Test which is a new approach to have all solutions. Test
                  which is a new approach to have all solutions
                  <div  className={classes.time}> 11:01 AM</div>
                </div>
              </div>
              <div  className={classes.description}>
                <div  className={classes.text}>
                  Test which is a new approach to have all solutions. Test
                  which is a new approach to
                  <div  className={classes.time}> 11:01 AM</div>
                </div>
              </div>
            </div>
            <div className={classes.outgoing}>
              <div className={classes.userImg}>
                <img src={user1} alt="username" />
              </div>
              <div  className={classes.description}>
                <div  className={classes.text}>
                  Test which is a new approach to have all solutions
                  <div  className={classes.time}> 11:01 AM</div>
                </div>
              </div>
              <div  className={classes.description}>
                <div  className={classes.text}>
                  Test which is a new approach to have all solutions. Test
                  which is a new approach to have all solutions
                  <div  className={classes.time}> 11:01 AM</div>
                </div>
              </div>
              <div  className={classes.description}>
                <div  className={classes.text}>
                  Test which is a new approach to have all solutions. Test
                  which is a new approach to
                  <div  className={classes.time}> 11:01 AM</div>
                </div>
              </div>
            </div>
          </div>
          <div  className={classes.type_msg}>
            <div className={classes.btn_group}>
              <button type="button" className={classes.btn}>
                <i className="fal fa-paperclip"></i>{" "}
              </button>
              <button type="button" className={classes.btn}>
                <i className="fal fa-image"></i>
              </button>
            </div>
            <input
                type="text"
                className={classes.form_control}
                placeholder="Write your message here"
            />
            <button className={`${classes.btn} ${classes.btnSend}`} type="button">
              <i className="fas fa-paper-plane"></i>
            </button>
          </div>
        </div>
      </div>
  )
}

export default MsgPreview
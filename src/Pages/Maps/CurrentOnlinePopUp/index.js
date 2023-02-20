import React, {useEffect} from 'react'
import { Button, Modal, Row, Col } from "react-bootstrap";
import classes from "./index.module.scss";
import profile from 'Images/dummy.png';

const CurrentOnlinePopUp = (props) => {
    const [onlinePlayers, setPlayers] = React.useState([]);
    const [DelModalShow, setDelModalShow] = React.useState(false);
    useEffect(() => {
        setDelModalShow(props.show);
    }, []);

    // const [isData, setIsData] = React.useState(false);
    useEffect(() => {
        console.log('props.players')
        console.log(props.players)
        setPlayers(props.players);
    }, []);
    //
    // useEffect(() => {
    //     setIsData(true);
    // }, [onlinePlayers]);
  return (
    <div>

        <Modal
            {...props}
            size='lg'
            centered
            show={DelModalShow}

        >
            <Modal.Body>
                <Modal.Title className={'py-4 text-center fw-semibold'}>Current Online Players</Modal.Title>
                {/*{isData ??*/}
                <ul className={classes.onlinePlayerList}>
                    {onlinePlayers && onlinePlayers.map((player) => (
                        <li>
                            {true
                                ? <span class={`${classes.status} ${classes.active}`}>online</span>
                                : <span class={`${classes.status} ${classes.inactive}`}>offline</span>
                            }
                            <div className={classes.iconBox}>
                                <img src={player.user?.image?.fileName ?? profile} alt={player.user?.username} />
                            </div>
                            <div>{player.user?.username}</div>
                        </li>
                    ))}
                </ul>
                <button onClick={props.onConfirm}>close</button>
                {/*}*/}
            </Modal.Body>

        </Modal>

    </div>
  )
}

export default CurrentOnlinePopUp
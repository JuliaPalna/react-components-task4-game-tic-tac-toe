import { Component } from 'react';
import { Information } from '../components/Information';
import { Field } from '../components/Field';
import styles from '../styles/game.module.css';

export class GameContainer extends Component {
    render() {
        return (
            <div className={styles.container}>
                <h1>GAME</h1>

                <Information />
                <Field />

                <button
                    className={styles['button-restart']}
                    onClick={this.props.onRestartGame}
                >
                    Начать заново
                </button>
            </div>
        );
    }
}

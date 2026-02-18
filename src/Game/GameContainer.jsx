import { Component } from 'react';
import { Information } from '../components/Information';
import { Field } from '../components/Field';

export class GameContainer extends Component {
    render() {
        return (
            <div
                className=" p-0
                flex
                flex-col
                justify-center
                items-center
                gap-10"
            >
                <h1 className="mt-15 text-3xl mb-10">GAME</h1>

                <Information />
                <Field />

                <button
                    className="p-3
                            bg-green-800
                            text-zinc-50
                            transition delay-100 ease-in-out
                            cursor-pointer
                            hover:bg-green-600
                            focus:bg-green-800
                            focus-visible:bg-green-800"
                    onClick={this.props.onRestartGame}
                >
                    Начать заново
                </button>
            </div>
        );
    }
}

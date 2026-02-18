import { Component } from 'react';
import { checkNotFindEmptyCell } from '../../utils/utils';

export class InformationContainer extends Component {
    constructor(props) {
        super(props);

        this.state = { message: `Ходит: ${props.currentPlayer}` };
    }

    componentDidUpdate(prevProps) {
        const { isGameEnded, currentPlayer, field } = this.props;

        if (
            prevProps.isGameEnded !== isGameEnded ||
            prevProps.currentPlayer !== currentPlayer ||
            prevProps.field !== field
        ) {
            this.update();
        }
    }

    update() {
        const { isGameEnded, currentPlayer, field } = this.props;

        let message = '';

        if (isGameEnded) {
            if (checkNotFindEmptyCell(field)) {
                message = 'Ничья';
            } else {
                message = `Победа: ${currentPlayer}`;
            }
        } else {
            message = `Ходит: ${currentPlayer}`;
        }

        this.setState({ message });
    }

    render() {
        return <p>{this.state.message}</p>;
    }
}

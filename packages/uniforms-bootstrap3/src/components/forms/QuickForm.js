import classnames          from 'classnames';
import {PropTypes}         from 'react';
import {QuickForm as Base} from 'uniforms';

import AutoField   from '../fields/AutoField';
import ErrorsField from '../fields/ErrorsField';
import SubmitField from '../fields/SubmitField';

export default class QuickForm extends Base {
    static propTypes = {
        ...Base.propTypes,

        grid: PropTypes.oneOfType([
            PropTypes.number,
            PropTypes.string
        ])
    };

    getNativeFormProps () {
        const props = super.getNativeFormProps();

        return {
            ...props,
            className: classnames(
                'form',
                {
                    error: !!this.getChildContextError(),
                    'form-horizontal': !!props.grid
                },
                props.className
            )
        };
    }

    getAutoField () {
        return AutoField;
    }

    getErrorsField () {
        return ErrorsField;
    }

    getSubmitField () {
        return SubmitField;
    }
}
import "./Trade.css";
import {Button} from "@cubitrix/cubitrix-react-ui-module";

export const Trade = (props) => {
    return (
        <div>
            <Button
                label={'Trade Button'}
                size={'btn-lg'}
                type={'btn-primary'}
                arrow={'arrow-right'}
            />
        </div>
    );
};

import { connect, connection } from 'mongoose';

connect('mongodb://localhost/weaselnet', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

export default connection;
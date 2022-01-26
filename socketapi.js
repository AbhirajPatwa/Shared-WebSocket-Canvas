const io = require( "socket.io" )();
const socketapi = {
    io: io
};

// Add your socket.io logic here!
io.on( "connection", function( socket ) {
    console.log(`New connection - ${socket.id}`);

    socket.on('mouse', (data) => {
        socket.broadcast.emit('mouse', data);
        //console.log(data);
    });
});
// end of socket.io logic

module.exports = socketapi;
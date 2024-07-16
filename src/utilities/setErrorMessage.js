// For HTTP response status codes greater than or equal to 400
const setErrorMessage = (statusCode) => {};

const statusCodes = {
  400: {
    message: `The server cannot or will not process the request due to something that is perceived to be a client error (e.g., malformed request syntax, invalid request message framing, or deceptive request routing).`,
    header: `Bad Request`,
  },
  401: {
    message: `Although the HTTP standard specifies "unauthorized", semantically this response means "unauthenticated". That is, the client must authenticate itself to get the requested response.`,
    header: `Unauthorized`,
  },
  402: {
    message: `This response code is reserved for future use. The initial aim for creating this code was using it for digital payment systems, however this status code is used very rarely and no standard convention exists.`,
    header: `Payment Required`,
  },
  403: {
    message: `The client does not have access rights to the content; that is, it is unauthorized, so the server is refusing to give the requested resource. Unlike 401 Unauthorized, the client's identity is known to the server.`,
    header: `Forbidden`,
  },
  404: {
    message: `The server cannot find the requested resource.`,
    header: `Page Not Found`,
  },
  405: {
    message: `The request method is known by the server but is not supported by the target resource.`,
    header: `Method Not Allowed`,
  },
  406: {
    message: `This response is sent when the web server, after performing server-driven content negotiation, doesn't find any content that conforms to the criteria given by the user agent.`,
    header: `Not Acceptable`,
  },
  407: {
    message: `Authentication is needed to be done by a proxy.`,
    header: `Proxy Authentication Required`,
  },
  408: {
    message: `This response is sent on an idle connection by some servers, even without any previous request by the client. It means that the server would like to shut down this unused connection.`,
    header: `Request Timeout`,
  },
  409: {
    message: `This response is sent when a request conflicts with the current state of the server.`,
    header: `Conflict`,
  },
  410: {
    message: `This response is sent when the requested content has been permanently deleted from server, with no forwarding address.`,
    header: `Gone`,
  },
  411: {
    message: `Server rejected the request because the Content-Length header field is not defined and the server requires it.`,
    header: `Length required`,
  },
  412: {
    message: `The client has indicated preconditions in its headers which the server does not meet.`,
    header: `Precondition Failed`,
  },
  413: {
    message: `Request entity is larger than limits defined by server.`,
    header: `Payload Too Large`,
  },
  414: {
    message: `The URI requested by the client is longer than the server is willing to interpret.`,
    header: `URI Too Long`,
  },
  415: {
    message: `The media format of the requested data is not supported by the server, so the server is rejecting the request.`,
    header: `Unsupported Media Type`,
  },
  416: {
    message: `The range specified by the Range header field in the request cannot be fulfilled.`,
    header: `Range Not Satisfiable`,
  },
  417: {
    message: `This response code means the expectation indicated by the Expect request header field cannot be met by the server.`,
    header: `Expectation Failed`,
  },
  418: {
    message: `The server refuses the attempt to brew coffee with a teapot.`,
    header: `I'm a teapot`,
  },
  421: {
    message: `The request was directed at a server that is not able to produce a response.`,
    header: `Misdirected Request`,
  },
  422: {
    message: `The request was well-formed but was unable to be followed due to semantic errors.`,
    header: `Unprocessable Content`,
  },
  423: {
    message: `The resource that is being accessed is locked.`,
    header: `Locked`,
  },
  424: {
    message: `The request failed due to failure of a previous request.`,
    header: `Failed Dependency`,
  },
  425: {
    message: `Indicates that the server is unwilling to risk processing a request that might be replayed.`,
    header: `Too Early`,
  },
  426: {
    message: `The server refuses to perform the request using the current protocol but might be willing to do so after the client upgrades to a different protocol.`,
    header: `Upgrade Required`,
  },
  428: {
    message: `The origin server requires the request to be conditional.`,
    header: `Precondition Required`,
  },
  429: {
    message: `The user has sent too many requests in a given amount of time ("rate limiting").`,
    header: `Too Many Requests`,
  },
  431: {
    message: `The server is unwilling to process the request because its header fields are too large.`,
    header: `Request Header Fields Too Large`,
  },
  451: {
    message: `The user agent requested a resource that cannot legally be provided`,
    header: `Unavailable For Legal Reasons`,
  },
};

export default setErrorMessage;

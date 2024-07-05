// For HTTP response status codes greater than or equal to 400
const setErrorMessage = (statusCode) => {};

const statusCodes = {
  400: {
    message: `The server cannot or will not process the request due to something that is perceived to be a client error (e.g., malformed request syntax, invalid request message framing, or deceptive request routing).`,
    statusText: `Bad Request`,
  },
  401: {
    message: `Although the HTTP standard specifies "unauthorized", semantically this response means "unauthenticated". That is, the client must authenticate itself to get the requested response.`,
    statusText: `Unauthorized`,
  },
  402: {
    message: `This response code is reserved for future use. The initial aim for creating this code was using it for digital payment systems, however this status code is used very rarely and no standard convention exists.`,
    statusText: `Payment Required`,
  },
  403: {
    message: `The client does not have access rights to the content; that is, it is unauthorized, so the server is refusing to give the requested resource. Unlike 401 Unauthorized, the client's identity is known to the server.`,
    statusText: `Forbidden`,
  },
  404: {
    message: `The server cannot find the requested resource.`,
    statusText: `Not Found`,
  },
  405: {
    message: `The request method is known by the server but is not supported by the target resource.`,
    statusText: `Method Not Allowed`,
  },
  406: {
    message: `This response is sent when the web server, after performing server-driven content negotiation, doesn't find any content that conforms to the criteria given by the user agent.`,
    statusText: `Not Acceptable`,
  },
  407: {
    message: `Authentication is needed to be done by a proxy.`,
    statusText: `Proxy Authentication Required`,
  },
  408: {
    message: `This response is sent on an idle connection by some servers, even without any previous request by the client. It means that the server would like to shut down this unused connection.`,
    statusText: `Request Timeout`,
  },
  409: {
    message: `This response is sent when a request conflicts with the current state of the server.`,
    statusText: `Conflict`,
  },
  410: {
    message: `This response is sent when the requested content has been permanently deleted from server, with no forwarding address.`,
    statusText: `Gone`,
  },
  411: {
    message: `Server rejected the request because the Content-Length header field is not defined and the server requires it.`,
    statusText: `Length required`,
  },
  412: {
    message: `The client has indicated preconditions in its headers which the server does not meet.`,
    statusText: `Precondition Failed`,
  },
  413: {
    message: `Request entity is larger than limits defined by server.`,
    statusText: `Payload Too Large`,
  },
};

export default setErrorMessage;

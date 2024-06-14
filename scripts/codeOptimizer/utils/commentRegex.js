// stores regex for all types of comments

const REGEX_MAP = {
    ['TODO']: {
        regex: /\/\/\s*TODO\s*:\s*@([a-zA-Z0-9_-]+)\s*:\s*(\d{2}-\d{2}-\d{4})\s*:\s*(\d+)\s*:\s*([^:]+)\s*:\s*(.*)/g,
        multiLineRegex: /\/\*\s*TODO\s*:\s*@([a-zA-Z0-9_-]+)\s*:\s*(\d{2}-\d{2}-\d{4})\s*:\s*(\d+)\s*:\s*([^:]+)\s*:\s*(.*?)\s*\*\//gs,
        multiLineStarRegex: /\/\*\s*TODO\s*:\s*@([a-zA-Z0-9_-]+)\s*:\s*\n\s*\*\s*(\d{2}-\d{2}-\d{4})\s*:\s*(\d+)\s*:\s*\n\s*\*\s*([^:]+)\s*:\s*(.*?)\s*\*\//gs
    },
    ['FIXME']: {
        regex: /\/\/\s*FIXME\s*:\s*@([a-zA-Z0-9_-]+)\s*:\s*(\d{2}-\d{2}-\d{4})\s*:\s*(\d+)\s*:\s*([^:]+)\s*:\s*(.*)/g,
        multiLineRegex: /\/\*\s*FIXME\s*:\s*@([a-zA-Z0-9_-]+)\s*:\s*(\d{2}-\d{2}-\d{4})\s*:\s*(\d+)\s*:\s*([^:]+)\s*:\s*(.*?)\s*\*\//gs,
        multiLineStarRegex: /\/\*\s*FIXME\s*:\s*@([a-zA-Z0-9_-]+)\s*:\s*\n\s*\*\s*(\d{2}-\d{2}-\d{4})\s*:\s*(\d+)\s*:\s*\n\s*\*\s*([^:]+)\s*:\s*(.*?)\s*\*\//gs
    },
    ['DP']: {
        regex: /\/\/\s*DP\s*:\s*@([a-zA-Z0-9_-]+)\s*:\s*(\d{2}-\d{2}-\d{4})\s*:\s*(\d+)\s*:\s*([^:]+)\s*:\s*(.*)/g,
        multiLineRegex: /\/\*\s*DP\s*:\s*@([a-zA-Z0-9_-]+)\s*:\s*(\d{2}-\d{2}-\d{4})\s*:\s*(\d+)\s*:\s*([^:]+)\s*:\s*(.*?)\s*\*\//gs,
        multiLineStarRegex: /\/\*\s*DP\s*:\s*@([a-zA-Z0-9_-]+)\s*:\s*\n\s*\*\s*(\d{2}-\d{2}-\d{4})\s*:\s*(\d+)\s*:\s*\n\s*\*\s*([^:]+)\s*:\s*(.*?)\s*\*\//gs
    }
}
export default REGEX_MAP;
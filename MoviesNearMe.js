/* 
Grab a fandango RSS feed for all theaters in your zip. Should be fixed to allow filtering theaters
and probably a better way to use fandango than this. First hack. 
*/
CmdUtils.CreateCommand({
  names: ["MoviesNearMe"],
  icon: "http://www.mozilla.com/favicon.ico",
  description: "Show movies near zip.",
  help: "'MoviesNearMe [zip]'",
  author: {name: "Jonathan Herr", email: "jrcedric@gmail.com"},
  license: "GPL",
  homepage: "",
  arguments: [{role: 'object', nountype: noun_arb_text}],
  preview: function preview(pblock, args) {
    pblock.innerHTML = "<IFRAME width=100% height=100% src=http://www.fandango.com/rss/moviesnearme_"+args.object.text+".rss/>"
  },
  execute: function execute(args) {
    Utils.openUrlInBrowser("http://www.fandango.com/rss/moviesnearme_"+args.object.text+".rss",null);
  }
});
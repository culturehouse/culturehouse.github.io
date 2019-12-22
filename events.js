$(document).ready(function () {
  $.ajaxSetup({ cache: true });
  $.getScript('https://connect.facebook.net/en_US/sdk.js', function () {
    FB.init({
      appId: '581169632702187',
      // appSecret: '98f38e626991e32454910e8a09b54669',
      version: 'v5.0'
    });
    var pageAccessToken = 'EAAIQkhmC7usBAHfzMebiqiuIVJDMUOGf8d6euymcJoAWp4rxWcLQsLb1oL7DNyE1qZCgEVgwevX7ZC6XcWow9BVRgjZAEOYMXulGZCgemSpDwv5F4M0B4sL4NbjWU9Gcf1Tt9RBpW3K5opYF4Evpytrk1N2JTt4xX2F3L296QS7BzhkjUAPc3RhdlmmD7mwZD';
    // var pageAccessToken = '581169632702187|98f38e626991e32454910e8a09b54669';
    FB.api(
      "/105326660972244/events",
      { access_token: pageAccessToken },
      renderEvents
    );
  });
});

renderEvents = (resp) => {
  console.log(resp.data[0])
  evs = resp.data.map((event) => {
    return {
      url: `https://facebook.com/${event.id}`,
      title: event.name,
      date: event.start_time,
    }
  })
  console.log(evs)
  const Item = ({ url, title, date }) => `
  <a href="${url}" target="_blank" class="event-link">
    <p class="list-group-item-text">${title}</p>
    <p class="list-group-item-text">${date}</p>
  </a>`;
  $('#test').html(evs.map(Item))
}
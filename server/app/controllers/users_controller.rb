class UsersController < ActionController::Base
  protect_from_forgery with: :exception



  def get_tweet_text_block
    user_name = params[:twitter_handle]
    text_block = combine_tweets($client.user_timeline(user_name))
    @json_ples = {:tweet_text => text_block}.to_json
    puts @json_ples
    render json: @json_ples
  end

  private

  def combine_tweets(tweet_arr)
    combined_tweet_string = []
    tweet_arr.each { |t| combined_tweet_string.push(t.text) }
    return combined_tweet_string.join(" ")
  end

end

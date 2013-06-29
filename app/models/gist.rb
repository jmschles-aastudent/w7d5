class Gist < ActiveRecord::Base
  attr_accessible :title, :user_id, :details

  belongs_to :user
  has_one :favourite
  has_one :admiring_user, through: :favourite, source: :user

  def as_json(options={})
    super(options.merge(include: :favourite))
  end
end

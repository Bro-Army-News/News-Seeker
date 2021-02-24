import java.util.Date;

public abstract class News {
    private String newsLocation;
    private Date date;

    public News(String newsLocation, Date date) {
        this.newsLocation = newsLocation;
        this.date = date;
    }

    public String getNewsLocation() {
        return newsLocation;
    }

    public void setNewsLocation(String newsLocation) {
        this.newsLocation = newsLocation;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }
}

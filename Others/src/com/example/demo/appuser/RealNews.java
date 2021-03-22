import java.util.Date;

public class RealNews extends News{
    private String newsLocation;

    public RealNews(String newsLocation, Date date, String newsLocation1) {
        super(newsLocation, date);
        this.newsLocation = newsLocation1;
    }

    public void calculateAccuracy(){

    }

    public void categorizeNews(){

    }

    @Override
    public String getNewsLocation() {
        return newsLocation;
    }

    @Override
    public void setNewsLocation(String newsLocation) {
        this.newsLocation = newsLocation;
    }
}
